import styled from "styled-components";

export const NavbarStyle = styled.div`
  grid-area: nav;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
  background: #f8f9fa;

  .nav-li a.active .home-icon {
    stroke: blue;
  } /* Green */
  .nav-li a.active .completed-icon {
    stroke: #22c55e;
  } /* Emerald */
  .nav-li a.active .pending-icon {
    stroke: #3b82f6;
  } /* Blue */
  .nav-li a.active .starred-icon {
    stroke: #f59e0b;
  } /* Amber */
  .nav-li a.active .overdue-icon {
    stroke: #ef4444;
  } /* Red */

  .nav-li a.active .analytics-icon {
    stroke: #1d0576;
  }

  @media (max-width: 550px) {
    position: absolute;
    top: 0px;
    right: ${({ right }) => (right === 0 ? right + "px" : "-300px")};
    width: 15rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100dvh !important;
    padding: 10px;
    border-radius: 0.5rem 0;

    // blur effect
    background: rgba(255, 182, 193, 0.2); /* Light pink with transparency */
    backdrop-filter: blur(10px); /* Blurs everything behind */
    z-index: 9;
    transition: 0.5s ease-in-out;
    .nav-li {
      display: flex;
      align-items: center;
      gap: 0px; /* Space between icon and text */
      padding: 4px 0;
      width: 99%;
      border-bottom: 1px solid green;
      background: transparent;
    }
    .nav-li a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: white;
      font-size: 16px;
      text-decoration: none;
    }
    .nav-li a::after {
      content: attr(data-label); /* Dynamic text from attribute */
      display: inline-block;
      font-size: 17px;
      font-weight: 500;
      color: #000;
      margin: auto;
    }

    .nav-li:has(.active .home-icon) {
      border-bottom: 2px solid blue;
    }

    .nav-li:has(.active .completed-icon) {
      border-bottom: 2px solid #22c55e;
    }

    .nav-li:has(.active .pending-icon) {
      border-bottom: 2px solid #3b82f6;
    }

    .nav-li:has(.active .starred-icon) {
      border-bottom: 2px solid #f59e0b;
    }

    .nav-li:has(.active .overdue-icon) {
      border-bottom: 2px solid #ef4444;
    }
    .nav-li:has(.active .analytics-icon) {
      border-bottom: 2px solid #1d0576;
    }
    .nav-li:has(.active .analytics-icon) .profile-container {
      display: flex;
    }
  }
`;
