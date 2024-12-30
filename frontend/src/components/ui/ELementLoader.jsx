import React from 'react';

const ElementLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="relative w-32 h-32">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pl-grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="black" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
            <mask id="pl-mask">
              <rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
            </mask>
          </defs>
          <g fill="currentColor">
            <g className="origin-center animate-spin-slow">
              <g transform="translate(20,20) rotate(0,44,44)">
                <g>
                  <rect width="40" height="40" rx="8" ry="8" />
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    ry="8"
                    transform="translate(0,48)"
                  />
                </g>
                <g transform="rotate(180,44,44)">
                  <rect width="40" height="40" rx="8" ry="8" />
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    ry="8"
                    transform="translate(0,48)"
                  />
                </g>
              </g>
            </g>
          </g>
          <g mask="url(#pl-mask)" fill="hsl(343,90%,50%)">
            <g className="origin-center animate-spin-slow">
              <g transform="translate(20,20) rotate(0,44,44)">
                <g>
                  <rect width="40" height="40" rx="8" ry="8" />
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    ry="8"
                    transform="translate(0,48)"
                  />
                </g>
                <g transform="rotate(180,44,44)">
                  <rect width="40" height="40" rx="8" ry="8" />
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    ry="8"
                    transform="translate(0,48)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </main>
    </div>
  );
};

export default ElementLoader;
