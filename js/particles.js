// comments were task requirement...
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#aaa" },
    // Particle shape (options: "circle", "square", "triangle", etc.)
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 4, random: true },
    move: {
      enable: true,
      speed: 3,
      // Movement direction (options: "none", "top", "bottom", "left", "right")
      direction: "none",
      // Behavior when hitting canvas edges (options: "bounce", "out")
      outMode: "bounce",
    },
  },
  interactivity: {
    events: {
      // Interaction on hover (options: "repulse", "grab", "bubble")
      onHover: { enable: true, mode: "repulse" },
      // Interaction on click (options: "push", "remove", "bubble")
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  detectRetina: true,
});
