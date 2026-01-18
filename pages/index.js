import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const readoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    const readout = readoutRef.current;
    if (!canvas || !frame) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const r = frame.getBoundingClientRect();
      const dpr = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));
      canvas.width = Math.floor(r.width * dpr);
      canvas.height = Math.floor(r.height * dpr);
      canvas.style.width = r.width + "px";
      canvas.style.height = r.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    let mouse = { x: 0, y: 0, down: false, inside: false };
    let pull = { x: 0, y: 0, vx: 0, vy: 0 };
    let base = { x: 0, y: 0 };

    const k = 0.08;
    const damp = 0.82;
    const snapThreshold = 130;
    const snapKick = 18;

    const lineWidth = 2.0;
    const glowWidth = 18;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const len = (x, y) => Math.hypot(x, y);

    function layout() {
      const w = frame.clientWidth;
      const h = frame.clientHeight;
      base.x = w * 0.5;
      base.y = h * 0.62;
      if (!pull.x && !pull.y) {
        pull.x = base.x;
        pull.y = base.y;
      }
    }

    function pointerPos(e) {
      const r = frame.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function drawGrid(w, h, t) {
      ctx.save();
      ctx.globalAlpha = 0.09;
      const step = 28;
      const wobble = 2.5 * Math.sin(t * 0.001);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(21,19,18,.35)";
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + wobble, 0);
        ctx.lineTo(x - wobble, h);
        ctx.stroke();
      }
      ctx.globalAlpha = 0.06;
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y - wobble);
        ctx.lineTo(w, y + wobble);
        ctx.stroke();
      }
      ctx.restore();
    }

    let raf = 0;

    function tick(t) {
      const w = frame.clientWidth;
      const h = frame.clientHeight;

      const influence = mouse.inside ? (mouse.down ? 1.0 : 0.55) : 0.0;
      const targetX = base.x + (mouse.x - base.x) * influence;
      const targetY = base.y + (mouse.y - base.y) * influence;

      const goalX = influence > 0 ? targetX : base.x;
      const goalY = influence > 0 ? targetY : base.y;

      const ax = (goalX - pull.x) * k;
      const ay = (goalY - pull.y) * k;
      pull.vx = (pull.vx + ax) * damp;
      pull.vy = (pull.vy + ay) * damp;
      pull.x += pull.vx;
      pull.y += pull.vy;

      const dx = pull.x - base.x;
      const dy = pull.y - base.y;
      const dist = len(dx, dy);
      const tension01 = clamp(dist / snapThreshold, 0, 1);
      if (readout) readout.textContent = `tension: ${Math.round(tension01 * 100)}%`;

      const movingOut = dx * pull.vx + dy * pull.vy > 0;
      if (influence > 0 && movingOut && dist > snapThreshold) {
        const overshoot = dist - snapThreshold;
        const nx = dx / (dist || 1);
        const ny = dy / (dist || 1);
        pull.vx -= nx * (snapKick + overshoot * 0.08);
        pull.vy -= ny * (snapKick + overshoot * 0.08);
      }

      ctx.clearRect(0, 0, w, h);
      drawGrid(w, h, t);

      const left = { x: w * 0.12, y: h * 0.62 };
      const right = { x: w * 0.88, y: h * 0.62 };
      const c1 = { x: (left.x + pull.x) * 0.5, y: (left.y + pull.y) * 0.5 };
      const c2 = { x: (right.x + pull.x) * 0.5, y: (right.y + pull.y) * 0.5 };

      // glow
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = 0.18 + tension01 * 0.24;
      ctx.lineWidth = glowWidth;
      ctx.strokeStyle = "rgba(21,19,18,.35)";
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, right.x, right.y);
      ctx.stroke();
      ctx.restore();

      // main line
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = "rgba(21,19,18,.92)";
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, right.x, right.y);
      ctx.stroke();
      ctx.restore();

      const node = (x, y, r, alpha) => {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(21,19,18,.92)";
        ctx.fill();
        ctx.restore();
      };

      node(left.x, left.y, 3.2, 0.9);
      node(right.x, right.y, 3.2, 0.9);

      ctx.save();
      ctx.beginPath();
      ctx.arc(pull.x, pull.y, 9, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(21,19,18,.55)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      node(pull.x, pull.y, 3.0, 0.95);

      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.beginPath();
      ctx.arc(base.x, base.y, snapThreshold, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(21,19,18,.35)";
      ctx.setLineDash([6, 8]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      raf = requestAnimationFrame(tick);
    }

    const onEnter = () => (mouse.inside = true);
    const onLeave = () => { mouse.inside = false; mouse.down = false; };
    const onDown = (e) => {
      mouse.down = true;
      const p = pointerPos(e);
      mouse.x = p.x; mouse.y = p.y;
      frame.setPointerCapture(e.pointerId);
    };
    const onUp = () => (mouse.down = false);
    const onMove = (e) => {
      const p = pointerPos(e);
      mouse.x = p.x; mouse.y = p.y;
    };

    frame.addEventListener("pointerenter", onEnter);
    frame.addEventListener("pointerleave", onLeave);
    frame.addEventListener("pointerdown", onDown);
    frame.addEventListener("pointerup", onUp);
    frame.addEventListener("pointermove", onMove);

    resize();
    layout();
    window.addEventListener("resize", resize);
    window.addEventListener("resize", layout);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      frame.removeEventListener("pointerenter", onEnter);
      frame.removeEventListener("pointerleave", onLeave);
      frame.removeEventListener("pointerdown", onDown);
      frame.removeEventListener("pointerup", onUp);
      frame.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", layout);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.frame} ref={frameRef}>
        <canvas ref={canvasRef} className={styles.canvas} />

        <div className={styles.header}>
          <div className={styles.title}>
            <h1>Work in Progress</h1>
            <p>Website coming soon. Pull the line until it snaps.</p>
          </div>
          <div className={styles.badge}>COMING SOON</div>
        </div>

        <div className={styles.hint}>Hover / drag to add tension · cross threshold to release</div>
        <div className={styles.footer} ref={readoutRef}>tension: 0%</div>
      </div>
    </div>
  );
}
