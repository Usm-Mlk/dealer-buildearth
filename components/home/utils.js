import { getVpdr } from 'utils/utils';

export const closeNavbar = () => {
  const closeTimeline = new TimelineMax();
  closeTimeline.staggerFromTo(
    '.navbar-menu ul li',
    0.5,
    {
      y: 0,
      opacity: 1,
      delay: 0.5,
    },
    {
      y: 25,
      opacity: 0,
    },
    -0.1
  );
  closeTimeline.to('#bg-circle', 1, {
    scale: 0,
    ease: Expo.easeInOut,
    delay: -0.5,
  });
  closeTimeline.to('.navbar-menu', 0, {
    display: 'none',
  });
  closeTimeline.to('.main-section2', 0, {
    position: 'absolute',
  });
  closeTimeline.to('.second-toggle', 0, {
    position: 'absolute',
  });
  closeTimeline.to('.menu-logo-circle', 0, {
    opacity: 0,
    delay: -1,
  });
  closeTimeline.to('.menu-footer', 0, {
    opacity: 0,
    delay: -1,
  });

};

export const openNavbar = () => {
  const openTimeline = new TimelineMax();
  openTimeline.to('.navbar-menu', 0, {
    display: 'flex',
  });
  openTimeline.to('.main-section2', 0, {
    position: 'absolute',
  });
  openTimeline.to('.second-toggle', 0, {
    position: 'fixed',
  });
  openTimeline.to('#bg-circle', 1.5, {
    scale: getVpdr(),
    ease: Expo.easeInOut,
  });
  openTimeline.to('.menu-logo-circle', 1.8, {
    opacity: 1,
  });
  openTimeline.to('.menu-footer', 1, {
    opacity: 1,
  });
  openTimeline.staggerFromTo(
    '.navbar-menu ul li',
    0.5,
    {
      y: 25,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    },
    0.1,
    1
  );
};

export class Circle {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas?.getContext('2d');
    this.size = 183;
    this.increment = 0.01;
    this.count = 0;
    this.animation = undefined;
    this.color = ['#F3E9B5', '#F3E9B5', '#F3E9B5'];
    this.currentcolor = this.color[Math.floor(Math.random() * (3 - 0))];
    requestAnimationFrame(this.animCircle.bind(this));
  }

  animCircle() {
    if (!this.ctx) {
      return;
    }
    this.count = this.count + this.increment;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.currentcolor;
    this.ctx.lineWidth = 4;
    this.ctx.arc(185, 285, this.size, 0, this.count * Math.PI);
    this.ctx.stroke();

    if (this.count >= 2) {
      this.currentcolor = this.color[Math.floor(Math.random() * (3 - 0))];
      cancelAnimationFrame(this.animation);
    }
    this.animation = requestAnimationFrame(this.animCircle.bind(this));
  }
}
