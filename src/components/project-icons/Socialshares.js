import React from 'react'

const Socialshares = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size || '100'}
    height={size || '100'}
    aria-hidden="true"
  >
    <path fill="#a81f80" style={{ fill: 'var(--color8, #a81f80)' }} d="M3.882 20.105v9.716c0 0 5.35 2.152 11.991 2.152 9.162 0 12.606-3.813 12.606-9.654 0-5.596-3.689-9.408-12.606-9.962-3.075-0.246-4.612-0.922-4.612-2.644 0-1.906 1.353-2.767 4.612-2.767 1.353 0 2.767 0.307 4.181 0.615 0.184 2.398 0.553 4.243 0.553 4.243h6.026v-9.839c0 0-4.489-1.968-10.761-1.968-9.101 0-12.606 3.567-12.606 9.716 0 5.534 3.567 9.347 12.606 9.9 3.013 0.184 4.612 0.922 4.612 2.706 0 1.906-1.66 2.706-4.612 2.706-1.906 0-3.874-0.369-5.842-0.799-0.123-1.66-0.492-4.12-0.492-4.12h-5.657z"></path>
  </svg>
)

export default Socialshares
