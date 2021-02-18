/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
  flash: {
    shape: (
      <path d="M449.121,161.803H273.684L366.936,0H156.027L62.879,266.202h149.75L146.25,512L449.121,161.803z M104.824,236.441
			l72.321-206.679h138.289l-93.251,161.803h161.853L208.938,394.022l42.556-157.581H104.824z"/>
    ),
    viewBox: "0 0 512 512",
  },
  astronaut: {
    shape: (
      <React.Fragment>
        <g>
	<g>
		<path d="M184,40c-53.019,0-96,42.981-96,96s42.981,96,96,96c52.996-0.057,95.943-43.004,96-96C280,82.981,237.019,40,184,40z
			 M184,56c38.771,0.065,71.925,27.898,78.704,66.072C243.2,112.36,205.952,96,176,96c-27.488,0-54.336,13.64-70.288,23.592
			C113.518,82.568,146.162,56.051,184,56z M184,216c-42.643-0.053-77.748-33.543-79.808-76.136C114.008,132.8,145.344,112,176,112
			c31.352,0,74.352,21.496,87.768,28.624C261.32,182.902,226.349,215.948,184,216z"/>
	</g>
</g>
<g>
	<g>
		<path d="M240,280h-48c-13.255,0-24,10.745-24,24v24c0,13.255,10.745,24,24,24h48c13.255,0,24-10.745,24-24v-24
			C264,290.745,253.255,280,240,280z M248,328c0,4.418-3.582,8-8,8h-48c-4.418,0-8-3.582-8-8v-24c0-4.418,3.582-8,8-8h48
			c4.418,0,8,3.582,8,8V328z"/>
	</g>
</g>
<g>
	<g>
		<path d="M480,64V0h-16v64c-0.06,45.47-34.722,83.421-80,87.592v-16.064c36.414-4.108,63.95-34.883,64-71.528V0h-16v64
			c-0.053,27.805-20.483,51.367-48,55.36V104c0-13.255-10.745-24-24-24h-20.72C317.6,35.88,269.6,8,208,8C123.2,8,64,60.64,64,136
			c-0.795,39.195,17.57,76.315,49.208,99.464l-69.552,14.208c-18.363,3.324-31.666,19.387-31.512,38.048
			c0.168,23.92,16.136,37.6,44.264,37.6l77.04-4.312c2.765,9.592,6.572,18.852,11.352,27.616l23.728,43.504
			c6.001,10.996,13.544,21.076,22.4,29.936l41.544,41.536c17.871,17.823,45.445,21.516,67.376,9.024l20.92-12
			c14.648,8.044,32.131,9.098,47.64,2.872l43.88-17.552c4.818,13.874,19.97,21.215,33.844,16.398
			c10.635-3.693,17.793-13.683,17.868-24.942V384c0-8.837-7.163-16-16-16h-32v0.2c-0.638-0.08-1.282-0.08-1.92,0l-43.616,10.784
			l-55.648-55.664c-2.809-2.806-5.146-6.048-6.92-9.6c-0.288-0.576-0.504-1.184-0.76-1.776H360c13.255,0,24-10.745,24-24V265.48
			l32.488-7.696c20.867-3.806,34.698-23.808,30.892-44.676c-3.806-20.867-23.808-34.698-44.676-30.892L384,185.6v-18.008
			C438.121,163.385,479.917,118.284,480,64z M424,384h24v53.4c-0.009,5.854-4.762,10.593-10.616,10.584
			c-4.547-0.007-8.584-2.913-10.032-7.224L424,430.696V384z M352,136c0.065-13.57-1.995-27.067-6.104-40H360c4.418,0,8,3.582,8,8
			v84.544l-29.696,5.416C347.458,176.02,352.155,156.14,352,136z M338.736,210.144L314.088,265.6L304,268v-33.496
			c8.446-6.363,16.023-13.805,22.536-22.136L338.736,210.144z M56,309.368c-24.8,0-27.8-12.416-27.856-21.752
			c-0.081-10.949,7.766-20.351,18.552-22.232l37.248-7.608l24.328,48.664L56,309.368z M125.68,305.464l-25.504-51L128,248.8v34.136
			c0.022,7.477,0.656,14.939,1.896,22.312L125.68,305.464z M80,136c0-65.944,52.632-112,128-112s128,46.056,128,112
			s-52.632,112-128,112S80,201.944,80,136z M378.344,409.52l11.312-11.312l-5.976-5.976l24.32-6.016v44.232l-45.6,18.232
			c-14.859,5.95-31.834,2.469-43.152-8.848l-57.6-57.6l-11.304,11.288l56.592,56.592l-15.08,8.616
			c-15.654,8.93-35.344,6.312-48.12-6.4l-41.544-41.536c-7.769-7.785-14.39-16.636-19.664-26.288l-23.72-43.544
			c-9.705-17.81-14.796-37.766-14.808-58.048v-30.616c20.4,7.916,42.118,11.888,64,11.704c27.858,0.443,55.377-6.162,80-19.2v52.44
			c-0.003,14.033,5.575,27.491,15.504,37.408L378.344,409.52z M368,288c0,4.418-3.582,8-8,8h-56v-11.568l64-15.2V288z M405.6,197.96
			c12.197-2.105,23.791,6.075,25.896,18.272c2.105,12.197-6.075,23.791-18.272,25.896l-79.56,18.832l24.128-54.288L405.6,197.96z"/>
	</g>
</g>
<g>
	<g>
		<rect x="296" y="120" width="16" height="40"/>
	</g>
</g>
<g>
	<g>
		<rect x="16" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect y="16" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="32" y="16" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="16" y="32" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect y="152" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="448" y="280" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="432" y="296" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="464" y="296" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="448" y="312" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="96" y="376" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="80" y="392" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="392" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="96" y="408" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="32" y="440" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="152" y="464" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect y="336" width="16" height="16"/>
	</g>
  </g>
      </React.Fragment>
    ),
    viewBox: "0 0 480 480",
  },
  mercury: {
    shape: (
      <React.Fragment>
        <g><g><path d="m437.058 74.972c-95.712-95.711-249.858-100.301-350.929-10.451-4.128 3.669-4.5 9.99-.83 14.118 3.668 4.126 9.99 4.5 14.117.83 93.17-82.824 235.267-78.586 323.5 9.646 92.017 92.016 92.017 241.738 0 333.754-44.574 44.575-103.839 69.123-166.877 69.123-63.037 0-122.303-24.548-166.877-69.123-73.133-73.132-90.271-183.89-42.646-275.605 2.545-4.901.635-10.938-4.267-13.483-4.903-2.545-10.938-.634-13.483 4.267-24.879 47.911-33.869 101.611-25.998 155.291 8.027 54.752 33.012 104.433 72.251 143.673 48.353 48.352 112.64 74.98 181.02 74.98 68.381 0 132.668-26.629 181.02-74.98 48.352-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.981-181.02z"/><path d="m251.191 416.896c5.338 1.432 10.817-1.737 12.247-7.071 5.291-19.746-.401-40.99-14.855-55.443-10.842-10.842-25.256-16.813-40.588-16.813s-29.746 5.971-40.588 16.812c-22.38 22.38-22.38 58.795 0 81.175 10.883 10.884 25.615 16.8 40.661 16.8 4.935 0 9.905-.637 14.783-1.944 5.334-1.43 8.5-6.913 7.07-12.248-1.43-5.334-6.911-8.501-12.248-7.071-12.86 3.447-26.706-.262-36.124-9.68-14.582-14.582-14.582-38.309 0-52.891 7.063-7.064 16.456-10.954 26.445-10.954s19.382 3.89 26.445 10.955c9.418 9.417 13.127 23.259 9.68 36.125-1.429 5.336 1.737 10.819 7.072 12.248z"/><path d="m296.834 381.393c0 8.681 3.381 16.843 9.52 22.98 6.138 6.139 14.3 9.519 22.98 9.519s16.843-3.38 22.981-9.519 9.52-14.3 9.52-22.981c0-8.682-3.381-16.843-9.52-22.981s-14.301-9.519-22.981-9.519-16.843 3.381-22.98 9.519c-6.139 6.139-9.52 14.301-9.52 22.982zm23.662-8.839c2.36-2.361 5.499-3.661 8.838-3.661s6.478 1.3 8.839 3.662c2.361 2.361 3.661 5.5 3.661 8.839 0 3.338-1.3 6.478-3.661 8.838-2.36 2.361-5.5 3.661-8.839 3.661s-6.478-1.3-8.838-3.661c-2.361-2.361-3.661-5.5-3.661-8.838 0-3.339 1.299-6.479 3.661-8.84z"/><path d="m162.527 81.368c-12.671 12.671-12.671 33.29 0 45.962 6.336 6.335 14.658 9.503 22.981 9.503 8.322 0 16.646-3.168 22.981-9.504 12.671-12.671 12.671-33.29 0-45.961-12.671-12.672-33.29-12.672-45.962 0zm31.82 31.819c-4.873 4.874-12.805 4.873-17.678 0-4.874-4.874-4.874-12.804 0-17.678 2.437-2.437 5.638-3.656 8.839-3.656s6.402 1.219 8.839 3.656c4.874 4.875 4.874 12.805 0 17.678z"/><path d="m140.82 181.847c-11.697-11.696-30.729-11.696-42.428 0-11.696 11.697-11.696 30.729.001 42.427l7.07 7.07c-.667 4.689-.667 9.455 0 14.144l-7.071 7.07c-5.65 5.651-8.763 13.185-8.763 21.213.001 8.029 3.113 15.563 8.764 21.213 5.65 5.651 13.184 8.763 21.213 8.763 8.028 0 15.562-3.112 21.213-8.763l7.07-7.071c4.689.667 9.455.667 14.145 0l7.07 7.071c5.849 5.848 13.53 8.772 21.213 8.772 7.682 0 15.365-2.924 21.214-8.772 11.696-11.697 11.696-30.729-.001-42.426l-7.07-7.071c.667-4.689.667-9.455 0-14.144l7.07-7.07c11.697-11.697 11.697-30.729 0-42.427-11.698-11.697-30.73-11.695-42.427 0l-7.069 7.07c-4.689-.667-9.455-.667-14.145 0zm21.919 27.589c3.455.921 7.128-.067 9.651-2.59l10.855-10.855c3.897-3.898 10.242-3.9 14.142 0 1.873 1.873 2.905 4.384 2.905 7.071s-1.032 5.198-2.905 7.071l-10.855 10.855c-2.523 2.524-3.511 6.202-2.591 9.651 1.359 5.088 1.359 10.468.001 15.556-.921 3.449.066 7.126 2.59 9.65l10.855 10.856c1.874 1.873 2.905 4.384 2.905 7.071s-1.031 5.198-2.905 7.071c-1.873 1.874-4.384 2.905-7.07 2.905s-5.197-1.031-7.07-2.905l-10.856-10.856c-1.9-1.9-4.454-2.929-7.072-2.929-.859 0-1.727.111-2.579.339-5.088 1.358-10.467 1.358-15.555 0-3.452-.92-7.127.067-9.651 2.59l-10.856 10.856c-1.873 1.874-4.384 2.905-7.07 2.905s-5.198-1.032-7.071-2.905-2.905-4.384-2.905-7.07c0-2.687 1.032-5.198 2.905-7.071l10.856-10.856c2.523-2.524 3.511-6.202 2.591-9.651-1.359-5.088-1.359-10.468 0-15.556.92-3.449-.067-7.126-2.591-9.651l-10.855-10.855c-1.874-1.873-2.905-4.384-2.905-7.071s1.031-5.198 2.905-7.071c3.899-3.9 10.244-3.898 14.142 0l10.855 10.855c2.524 2.523 6.202 3.511 9.651 2.59 5.086-1.359 10.465-1.359 15.553 0z"/><path d="m106.042 337.191c-5.522 0-9.997 4.477-9.997 10s4.481 10 10.004 10 10-4.477 10-10-4.478-10-10-10z"/><path d="m299.249 156.791c5.522 0 10-4.477 10-10s-4.478-10-10-10h-.008c-5.522 0-9.996 4.477-9.996 10s4.481 10 10.004 10z"/><path d="m298.042 280.391c5.522 0 10-4.477 10-10s-4.478-10-10-10h-.008c-5.522 0-9.996 4.477-9.996 10s4.481 10 10.004 10z"/><path d="m403.641 205.192h-.007c-5.522 0-9.997 4.477-9.997 10s4.481 10 10.004 10 10-4.477 10-10-4.477-10-10-10z"/><path d="m404.438 326.791c0 5.523 4.481 10 10.004 10s10-4.477 10-10-4.478-10-10-10h-.008c-5.522 0-9.996 4.477-9.996 10z"/><path d="m61.963 114.786c5.522 0 10-4.477 10-10s-4.478-10-10-10h-.007c-5.522 0-9.996 4.477-9.996 10s4.48 10 10.003 10z"/></g></g>
      </React.Fragment>
    ),
    viewBox: "0 0 512.039 512.039",
  },
  startup: {
    shape: (
      <React.Fragment>
        <g>
	<g>
		<path d="M268.662,243.351c-3.91-3.91-10.24-3.91-14.15,0c-3.9,3.9-3.9,10.23,0,14.14c3.91,3.9,10.24,3.9,14.15,0
			C272.562,253.581,272.562,247.251,268.662,243.351z"/>
	</g>
</g>
<g>
	<g>
		<path d="M395.933,116.07c-19.54-19.539-51.172-19.54-70.713,0c-19.489,19.489-19.49,51.209,0.003,70.714
			c19.496,19.484,51.216,19.492,70.71-0.002C415.471,167.244,415.475,135.611,395.933,116.07z M381.791,172.639
			c-11.693,11.694-30.727,11.694-42.426,0.002c-11.695-11.702-11.696-30.736-0.002-42.429c11.723-11.723,30.703-11.725,42.428,0
			C393.514,141.934,393.516,160.915,381.791,172.639z"/>
	</g>
</g>
<g>
	<g>
		<path d="M509.07,2.929c-1.964-1.963-4.644-3.027-7.43-2.922c-2.261,0.081-56.096,2.245-120.091,24.864
			c-51.28,18.106-94.023,44.029-127.042,77.049c-7.399,7.399-14.599,15.245-21.488,23.396c-32.648-19.218-58.81-13.192-75.349-4.341
			c-38.081,20.38-61.652,75.716-61.652,115.296c0.003,4.044,2.44,7.691,6.176,9.238c1.237,0.513,2.537,0.762,3.825,0.762
			c2.603,0,5.16-1.017,7.073-2.929c20.083-20.083,44.854-18.827,52.946-17.763l3.502,3.502c-6.892,16.4-12.444,32.708-16.516,48.569
			c-1.47,5.74-0.974,11.814,1.211,17.37c-9.628,4.437-18.917,10.952-27.005,19.04c-25.741,25.742-30.968,88.476-31.178,91.134
			c-0.23,2.917,0.828,5.789,2.897,7.858c1.883,1.882,4.43,2.929,7.07,2.929c0.262,0,0.525-0.01,0.788-0.031
			c2.658-0.209,65.394-5.436,91.135-31.177c8.085-8.085,14.599-17.373,19.036-26.999c5.882,2.313,11.936,2.598,17.38,1.203
			c15.854-4.071,32.16-9.621,48.562-16.514l3.502,3.502c1.063,8.093,2.319,32.864-17.763,52.945
			c-2.859,2.86-3.715,7.161-2.167,10.897c1.547,3.737,5.193,6.173,9.238,6.173c39.58,0,94.915-23.571,115.295-61.652
			c8.851-16.537,14.877-42.699-4.341-75.348c8.147-6.886,15.994-14.086,23.396-21.488c33.02-33.02,58.942-75.763,77.048-127.039
			c22.62-63.998,24.783-117.834,24.864-120.094C512.092,7.584,511.033,4.893,509.07,2.929z M118.376,214.762
			c6.212-30.063,24.255-63.052,48.735-76.154c16.359-8.754,34.24-7.896,53.252,2.511c-16.197,21.302-30.278,44.252-42.015,68.487
			c-0.149-0.092-1.949-2.355-5.293-3.109C171.68,206.186,145.221,200.495,118.376,214.762z M183.8,370.63
			c-13.75,13.75-46.005,21.002-66.392,23.963c2.962-20.388,10.215-52.642,23.964-66.391c7.7-7.7,16.628-13.538,25.602-16.826
			l33.652,33.652C197.338,354.002,191.501,362.93,183.8,370.63z M229.39,339.603c-2.894,0.741-6.246-0.347-8.738-2.835
			c-12.937-12.937-17.998-17.998-19.586-19.585c-2.912-2.912-10.053-10.053-25.826-25.827c-2.494-2.499-3.582-5.85-2.843-8.739
			c3.203-12.474,7.392-25.272,12.486-38.193l82.695,82.695C254.655,332.214,241.859,336.402,229.39,339.603z M373.394,344.891
			c-13.102,24.479-46.09,42.523-76.152,48.734c9.585-18.037,11.698-40.998,8.196-54.921c-0.813-3.234-2.923-4.86-3.041-5.051
			c24.233-11.737,47.182-25.818,68.486-42.015C381.29,310.652,382.147,328.535,373.394,344.891z M395.94,243.35
			c-9.011,9.01-18.714,17.715-28.84,25.872c-24.342,19.6-51.134,36.202-79.718,49.418l-94.02-94.018
			c13.216-28.586,29.818-55.378,49.416-79.717c8.164-10.133,16.868-19.837,25.875-28.843
			c29.625-29.626,67.859-53.204,113.671-70.176l83.792,83.792C449.146,175.489,425.568,213.723,395.94,243.35z M473.311,108.587
			l-69.896-69.896c38.081-11.828,71.21-16.257,87.746-17.849C489.568,37.381,485.138,70.51,473.311,108.587z"/>
	</g>
</g>
<g>
	<g>
		<path d="M240.371,413.049c-3.907-3.905-10.239-3.903-14.143,0.002l-28.28,28.29c-3.904,3.906-3.903,10.238,0.002,14.142
			c3.907,3.904,10.239,3.904,14.143-0.002l28.28-28.29C244.277,423.285,244.276,416.953,240.371,413.049z"/>
	</g>
</g>
<g>
	<g>
		<path d="M98.954,271.631c-3.904-3.906-10.235-3.906-14.142-0.002l-28.29,28.28c-3.906,3.904-3.907,10.236-0.003,14.142
			c3.903,3.904,10.234,3.908,14.142,0.002l28.29-28.28C102.857,281.869,102.858,275.537,98.954,271.631z"/>
	</g>
</g>
<g>
	<g>
		<path d="M169.663,427.2c-3.903-3.905-10.236-3.905-14.142-0.001l-67.74,67.73c-3.906,3.905-3.906,10.237-0.001,14.142
			c3.903,3.905,10.236,3.907,14.142,0.001l67.74-67.73C173.568,437.437,173.568,431.105,169.663,427.2z"/>
	</g>
</g>
<g>
	<g>
		<path d="M89.663,427.2c-3.904-3.905-10.237-3.905-14.142-0.001l-67.74,67.73c-3.906,3.905-3.906,10.237-0.001,14.142
			c3.903,3.905,10.236,3.907,14.142,0.001l67.74-67.73C93.568,437.437,93.568,431.105,89.663,427.2z"/>
	</g>
</g>
<g>
	<g>
		<path d="M84.802,342.338c-3.904-3.904-10.237-3.904-14.142,0.001l-67.73,67.74c-3.905,3.906-3.905,10.237,0.001,14.143
			c3.905,3.905,10.237,3.905,14.142-0.001l67.73-67.74C88.708,352.575,88.708,346.244,84.802,342.338z"/>
	</g>
</g>
<g>
	<g>
		<path d="M311.083,200.919c-3.906-3.905-10.236-3.905-14.143,0l-14.14,14.14c-3.905,3.905-3.905,10.237,0,14.143
			c3.906,3.905,10.237,3.905,14.143,0l14.14-14.14C314.988,211.157,314.988,204.825,311.083,200.919z"/>
	</g>
</g>
      </React.Fragment>
    ),
    viewBox: "0 0 512.001 512.001",
  },
  satellite : {
    shape: (
      <React.Fragment>
        <g>
	<g>
		<path d="M415.106,222.186l-10.514-10.514c-2.949-2.949-7.73-2.95-10.678-0.001c-2.948,2.949-2.949,7.73,0,10.678l4.93,4.931
			c-14.511,12.071-32.613,18.642-51.723,18.642c-21.647,0-42-8.43-57.307-23.737c-29.8-29.8-31.499-77.221-5.092-109.028
			l83.507,83.508c2.948,2.948,7.729,2.948,10.678,0c2.949-2.95,2.949-7.73,0-10.679l-5.841-5.841l20.931-52.328
			c2.413-6.032-3.778-12.236-9.815-9.815l-52.326,20.932l-42.04-42.04c-2.906-2.907-7.771-2.907-10.678,0
			c-37.488,37.488-37.488,98.483,0,135.972c18.159,18.158,42.303,28.159,67.985,28.159s49.826-10.001,67.985-28.16
			C418.055,229.914,418.055,225.134,415.106,222.186z M373.433,138.566l-11.984,29.961l-4.413-4.413l-13.564-13.565L373.433,138.566
			z"/>
	</g>
</g>
<g>
	<g>
		<path d="M465.671,46.329c-18.16-18.161-42.304-28.162-67.986-28.162c-4.17,0-7.551,3.38-7.551,7.551
			c0,4.171,3.382,7.551,7.552,7.551c21.647,0,42,8.431,57.307,23.738c15.307,15.306,23.737,35.658,23.737,57.306
			c0,4.171,3.381,7.551,7.551,7.551c4.17,0,7.551-3.381,7.551-7.551C493.832,88.63,483.83,64.487,465.671,46.329z"/>
	</g>
</g>
<g>
	<g>
		<path d="M442.891,69.108c-12.075-12.074-28.129-18.725-45.205-18.725c-4.17,0-7.551,3.38-7.551,7.551s3.381,7.551,7.551,7.551
			c13.043,0,25.304,5.079,34.527,14.302c9.222,9.222,14.301,21.483,14.301,34.526c0,4.171,3.381,7.551,7.551,7.551
			c4.17,0,7.551-3.38,7.551-7.551C461.615,97.237,454.966,81.183,442.891,69.108z"/>
	</g>
</g>
<g>
	<g>
		<path d="M420.111,91.889c-5.989-5.988-13.953-9.288-22.424-9.289c-4.17,0-7.551,3.38-7.551,7.55c0,4.17,3.379,7.551,7.549,7.552
			c4.438,0.001,8.61,1.73,11.747,4.867c3.137,3.136,4.866,7.308,4.866,11.745c0,4.171,3.381,7.551,7.551,7.551
			s7.551-3.38,7.551-7.551C429.399,105.842,426.1,97.878,420.111,91.889z"/>
	</g>
</g>
<g>
	<g>
		<path d="M509.788,419.378L373.105,282.694c-2.907-2.907-7.771-2.907-10.678,0L327.9,317.221l-38.441-38.441l11.746-11.746
			c2.908-2.909,2.908-7.771,0-10.679l-45.561-45.561c-2.948-2.947-7.729-2.949-10.678,0l-11.747,11.746l-38.441-38.442
			l34.526-34.526c2.949-2.95,2.949-7.73,0-10.679L92.621,2.211c-2.906-2.907-7.771-2.907-10.678,0L2.212,81.943
			c-2.949,2.95-2.949,7.73,0,10.679l136.683,136.683c2.906,2.906,7.771,2.906,10.678,0l34.527-34.527l38.441,38.441l-11.746,11.746
			c-2.908,2.909-2.908,7.771,0,10.679l6.051,6.051l-11.746,11.746c-2.908,2.909-2.908,7.771,0,10.679l22.78,22.781
			c2.906,2.906,7.771,2.906,10.678,0l11.746-11.746l6.051,6.051c2.91,2.909,7.769,2.909,10.678,0l11.747-11.746l38.441,38.442
			l-34.526,34.526c-2.949,2.95-2.949,7.73,0,10.679l136.683,136.683c2.906,2.906,7.771,2.906,10.678,0l79.732-79.732
			C512.737,427.106,512.737,422.326,509.788,419.378z M167.725,98.672l-29.187,29.187l-34.882-34.882l29.187-29.187L167.725,98.672z
			 M87.282,18.229l34.882,34.882L92.977,82.298L58.095,47.416L87.282,18.229z M53.13,122.182l-34.9-34.9l29.187-29.187
			l34.882,34.882l-28.831,28.831C53.347,121.929,53.24,122.056,53.13,122.182z M98.69,167.743l-34.919-34.919
			c0.126-0.11,0.254-0.217,0.373-0.337l28.832-28.832l34.882,34.882l-28.832,28.831C98.908,167.49,98.8,167.617,98.69,167.743z
			 M144.234,213.287l-34.9-34.901c0.126-0.11,0.254-0.217,0.374-0.337l28.832-28.832l34.882,34.882L144.234,213.287z
			 M149.217,138.538l29.187-29.187l34.882,34.882l-29.187,29.187L149.217,138.538z M233.219,290.882l-12.102-12.102l6.407-6.406
			l12.102,12.102L233.219,290.882z M261.695,285.187l-34.882-34.882l23.493-23.492l34.882,34.882L261.695,285.187z M448.21,379.156
			l-29.188,29.187l-34.882-34.882l29.188-29.187L448.21,379.156z M367.766,298.712l34.882,34.882l-29.188,29.187l-34.882-34.882
			L367.766,298.712z M333.614,402.666l-34.9-34.9l29.187-29.187l34.882,34.882l-28.831,28.831
			C333.831,402.413,333.724,402.54,333.614,402.666z M379.174,448.227l-34.919-34.919c0.126-0.11,0.254-0.217,0.374-0.337
			l28.832-28.832l34.882,34.882l-28.831,28.831C379.392,447.973,379.284,448.1,379.174,448.227z M424.718,493.77l-34.9-34.901
			c0.126-0.11,0.254-0.217,0.374-0.337l28.832-28.832l34.882,34.882L424.718,493.77z M464.583,453.904l-34.882-34.882l29.188-29.188
			l34.882,34.882L464.583,453.904z"/>
	</g>
</g>
      </React.Fragment>
    ),
    viewBox: "0 0 511.999 511.999",
  },
  saturn: {
    shape: (
      <React.Fragment>
        <g><path d="m498.993 11.785c-15.118-15.119-40.938-15.688-76.739-1.693-21.84 8.541-47.088 22.265-75.125 40.815-28.872-12.941-59.687-19.515-91.742-19.515-6.2 0-12.46.256-18.604.76-52.979 4.339-102.91 27.51-140.597 65.246-37.689 37.739-60.795 87.708-65.06 140.688-.49 6.025-.739 12.184-.739 18.307 0 32.182 6.623 63.104 19.656 92.055-18.097 27.488-31.532 52.293-39.957 73.814-13.993 35.801-13.424 61.619 1.694 76.737 8.235 8.236 19.251 11.724 32.013 11.724 33.623-.003 79.337-24.228 118.054-49.657 29.376 13.48 60.794 20.327 93.539 20.327 60.1 0 116.603-23.404 159.1-65.901 42.496-42.497 65.9-99 65.9-159.099 0-32.62-6.8-63.933-20.186-93.225 35.587-53.903 68.926-121.249 38.793-151.383zm-437.966 228.72c7.693-95.577 82.639-170.627 178.206-178.454 5.334-.438 10.769-.66 16.153-.66 30.359 0 59.426 6.773 86.396 20.134 10.343 5.119 20.235 11.166 29.521 18.04-17.543 38.793-62.286 96.502-119.873 154.122-57.656 57.688-114.903 101.918-152.927 118.54-6.802-9.197-12.787-18.976-17.856-29.185-13.444-27.032-20.261-56.185-20.261-86.65.001-5.315.217-10.655.641-15.887zm-17.061 240.386c-5.39 0-9.033-1.167-10.973-3.106-4.112-4.113-5.262-18.262 5.031-44.596 6.187-15.805 15.872-34.419 28.387-54.645 4.774 7.372 9.98 14.476 15.592 21.253l6.569 7.932 9.762-3.28c89.711-30.144 272.283-212.373 305.239-304.664l3.528-9.88-8.069-6.703c-6.936-5.761-14.223-11.095-21.796-15.98 20.748-12.918 39.812-22.883 55.941-29.19 26.343-10.296 40.489-9.146 44.603-5.034 8.266 8.266 2.515 47.18-47.208 120.503-32.399 47.768-76.243 99.735-126.792 150.284-51.024 51.024-103.424 95.159-151.535 127.633-55.367 37.369-90.909 49.475-108.279 49.473zm211.421-29.499c-22.158 0-43.606-3.622-64.054-10.754 43.292-31.47 89.047-71.025 133.66-115.639 44.155-44.155 83.396-89.477 114.727-132.403 7.074 20.374 10.667 41.735 10.667 63.796 0 107.523-87.477 195-195 195z"/><path d="m104.387 226.392h30v30h-30z"/><path d="m164.387 196.392h30v30h-30z"/><path d="m343.387 346.392h30v30h-30z"/></g>
      </React.Fragment>
    ),
    viewBox: "0 0 510.726 510.726",
  },
  ufo: {
    shape: (
      <React.Fragment>
        <g><g><path d="m507.447 326.602c-.117-.176-.239-.349-.367-.518l-17.478-23.078c1.57-4.283 2.427-8.907 2.427-13.727 0-22.056-17.944-40.001-40-40.001-1.018 0-2.025.051-3.024.126l-20.319-26.829c-4.869-8.057-13.573-13.081-22.985-13.279-2.417-36.785-18.068-70.997-44.535-97.006-19.998-19.653-44.575-33.04-71.276-39.18.749-2.868 1.14-5.836 1.14-8.832 0-19.299-15.701-35-35-35s-35 15.701-35 35c0 2.996.391 5.964 1.14 8.832-26.702 6.14-51.278 19.527-71.276 39.18-26.467 26.009-42.118 60.221-44.535 97.006-9.411.198-18.115 5.221-22.985 13.278l-20.319 26.829c-.999-.075-2.006-.126-3.024-.126-22.056 0-40 17.944-40 40.001 0 4.82.857 9.444 2.427 13.727l-17.478 23.079c-.128.168-.25.341-.367.518-5.667 8.561-6.141 19.083-1.266 28.147 4.821 8.965 14.076 14.531 24.151 14.53h.023 84.434c38.932 37.397 90.072 57.99 144.074 57.99s105.143-20.593 144.074-57.99h84.425.023c10.083 0 19.339-5.566 24.16-14.53 4.877-9.064 4.404-19.587-1.264-28.147zm-35.417-37.322c0 11.028-8.972 20-20 20s-20-8.972-20-20 8.972-20 20-20 20 8.971 20 20zm-86.396-80.001h-81.208l40.51-40.509c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.237-3.904-14.143 0l-54.652 54.652h-31.339l91.751-91.751c27.582 21.918 46.214 54.733 49.081 91.751zm-144.604-144.999c0-8.271 6.729-15 15-15s15 6.729 15 15c0 1.945-.394 3.857-1.117 5.638-4.59-.42-9.22-.639-13.883-.639s-9.293.22-13.883.639c-.723-1.781-1.117-3.693-1.117-5.638zm9.94 25.108-21.578 21.577c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l34.013-34.013c15.044 2.551 29.254 7.719 42.126 15.026l-103.157 103.158h-57.152l20.531-20.532c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.143 0l-34.673 34.674h-4.654c5.05-65.174 58.968-117.326 124.545-119.891zm-190.939 179.891c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20zm195.999 137.99c-41.35 0-80.846-13.356-113.347-37.99h226.694c-32.501 24.634-71.997 37.99-113.347 37.99zm235.068-61.993c-.505.939-2.469 4.003-6.553 4.003-.002 0-.004 0-.007 0h-457.025c-.002 0-.004 0-.007 0-4.075 0-6.04-3.064-6.544-4.003-.624-1.159-1.827-4.165.19-7.418l13.434-17.738c6.919 5.719 15.788 9.159 25.445 9.159 22.056 0 40-17.944 40-40 0-13.591-6.819-25.614-17.21-32.846l16.849-22.247c.264-.349.505-.714.721-1.095 1.337-2.352 3.844-3.813 6.541-3.813h298.196c2.697 0 5.204 1.461 6.541 3.813.216.38.457.746.721 1.095l16.849 22.247c-10.391 7.232-17.21 19.255-17.21 32.846 0 22.056 17.944 40 40 40 9.657 0 18.526-3.44 25.445-9.159l13.434 17.738c2.017 3.253.814 6.26.19 7.418z"/><path d="m256.031 249.279c-22.056 0-40.001 17.944-40.001 40.001s17.944 40 40.001 40c22.056 0 40-17.944 40-40s-17.945-40.001-40-40.001zm0 60.001c-11.028 0-20.001-8.972-20.001-20s8.972-20 20.001-20c11.028 0 20 8.972 20 20-.001 11.027-8.973 20-20 20z"/><path d="m256.03 447.271c-5.523 0-10 4.477-10 10v15.509c0 5.523 4.477 10 10 10s10-4.477 10-10v-15.509c0-5.523-4.477-10-10-10z"/><path d="m197.022 439.502c-5.336-1.43-10.818 1.736-12.248 7.071l-4.014 14.981c-1.43 5.335 1.736 10.818 7.071 12.248.867.232 1.738.343 2.595.343 4.415 0 8.456-2.947 9.653-7.414l4.014-14.981c1.429-5.335-1.737-10.819-7.071-12.248z"/><path d="m142.035 416.725c-4.782-2.76-10.898-1.122-13.66 3.66l-7.755 13.432c-2.762 4.783-1.123 10.899 3.66 13.66 1.575.909 3.294 1.342 4.991 1.342 3.456 0 6.817-1.794 8.669-5.002l7.755-13.432c2.761-4.782 1.123-10.898-3.66-13.66z"/><path d="m327.286 446.573c-1.43-5.334-6.913-8.503-12.248-7.071-5.334 1.429-8.5 6.913-7.071 12.248l4.014 14.981c1.197 4.468 5.237 7.414 9.653 7.414.856 0 1.728-.111 2.595-.343 5.334-1.429 8.5-6.913 7.071-12.248z"/><path d="m383.686 420.386c-2.762-4.783-8.878-6.423-13.66-3.66-4.783 2.761-6.422 8.877-3.66 13.66l7.755 13.432c1.852 3.208 5.213 5.002 8.669 5.002 1.696 0 3.416-.433 4.991-1.342 4.783-2.761 6.422-8.877 3.66-13.66z"/><path d="m158.034 279.28h-.007c-5.523 0-9.997 4.477-9.997 10s4.481 10 10.004 10 10-4.477 10-10-4.477-10-10-10z"/><path d="m354.034 279.28h-.007c-5.523 0-9.997 4.477-9.997 10s4.481 10 10.004 10 10-4.477 10-10-4.478-10-10-10z"/><path d="m204.646 159.855c5.523 0 10-4.477 10-10s-4.477-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10z"/></g></g>
      </React.Fragment>
    ),
    viewBox: "0 0 512.06 512.06",
  },
  satellite2: {
    shape: (
      <React.Fragment>
        <path d="m33.278 59.572a21.768 21.768 0 0 1 -17.678-34.472 1 1 0 0 1 1.34-.265l35.187 21.9a1 1 0 0 1 .354 1.32 21.745 21.745 0 0 1 -19.203 11.517zm-16.578-32.534a19.769 19.769 0 1 0 33.561 20.887z"/><path d="m16.1 72h-6.76a1 1 0 0 1 -.831-1.556l11.22-16.779a.925.925 0 0 1 .107-.134 1 1 0 0 1 1.524 1.292l-10.149 15.177h4.889a1 1 0 0 1 0 2z"/><path d="m39.76 72h-6.76a1 1 0 0 1 0-2h5.11l-5.717-10.958a1 1 0 1 1 1.774-.924l6.479 12.42a1 1 0 0 1 -.886 1.462z"/><path d="m26 72h-2.9a1 1 0 1 1 0-2h2.9a1 1 0 0 1 0 2z"/><path d="m33.762 37.473a1 1 0 0 1 -.8-1.591l3.362-4.591a1 1 0 1 1 1.613 1.182l-3.367 4.591a1 1 0 0 1 -.808.409z"/><path d="m39.016 33.424a4.565 4.565 0 1 1 4.565-4.565 4.571 4.571 0 0 1 -4.565 4.565zm0-7.13a2.565 2.565 0 1 0 2.565 2.565 2.568 2.568 0 0 0 -2.565-2.565z"/><path d="m64.664 28.249a1 1 0 0 1 -1-.9 25.79 25.79 0 0 0 -28.119-23.23 1 1 0 0 1 -.19-1.992 27.791 27.791 0 0 1 30.305 25.026 1 1 0 0 1 -.9 1.091c-.033.003-.065.005-.096.005z"/><path d="m56.544 29.023a1 1 0 0 1 -.995-.9 17.652 17.652 0 0 0 -19.229-15.885 1 1 0 1 1 -.19-1.991 19.656 19.656 0 0 1 21.411 17.681 1 1 0 0 1 -.9 1.091c-.034.003-.065.004-.097.004z"/><path d="m48.424 29.8a1 1 0 0 1 -.994-.9 9.49 9.49 0 0 0 -10.33-8.542 1 1 0 1 1 -.191-1.991 11.492 11.492 0 0 1 12.512 10.333 1 1 0 0 1 -.9 1.09c-.033.01-.065.01-.097.01z"/>
      </React.Fragment>
    ),
    viewBox: "0 0 74 74",
  },
  planet: {
    shape: (
      <React.Fragment>
        <g>
	<g>
		<path d="M227.159,101.14c-5.522,0-10,4.477-10,10s4.478,10,10,10c9.06,0,16.43,7.37,16.43,16.43s-7.37,16.43-16.43,16.43
			s-16.43-7.37-16.43-16.43c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10c0,20.088,16.342,36.43,36.43,36.43
			s36.43-16.342,36.43-36.43S247.247,101.14,227.159,101.14z"/>
	</g>
</g>
<g>
	<g>
		<path d="M234.229,224.93c-1.859-1.86-4.439-2.93-7.069-2.93c-2.631,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
			s1.069,5.21,2.93,7.07c1.861,1.86,4.439,2.93,7.07,2.93c2.63,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07
			S236.091,226.79,234.229,224.93z"/>
	</g>
</g>
<g>
	<g>
		<path d="M119.154,393.512l-0.333-0.333c-3.906-3.904-10.236-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l0.334,0.333
			c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929C123.06,403.75,123.06,397.418,119.154,393.512z"/>
	</g>
</g>
<g>
	<g>
		<path d="M509.07,35.91l-32.98-32.981C474.214,1.054,471.672,0,469.02,0s-5.195,1.054-7.071,2.929l-32.98,32.981
			c-3.905,3.905-3.905,10.237,0,14.142l32.979,32.981c1.876,1.875,4.419,2.929,7.071,2.929c2.652,0,5.195-1.054,7.071-2.929
			l32.981-32.981c1.875-1.875,2.929-4.419,2.929-7.071C512,40.329,510.945,37.785,509.07,35.91z M469.02,61.82L450.18,42.981
			l18.839-18.839l18.839,18.839L469.02,61.82z"/>
	</g>
</g>
<g>
	<g>
		<path d="M83.032,461.947l-32.979-32.98c-3.904-3.903-10.234-3.905-14.143,0L2.93,461.947C1.055,463.822,0,466.366,0,469.019
			s1.054,5.195,2.929,7.071l32.981,32.981c1.876,1.875,4.419,2.929,7.071,2.929c2.652,0,5.196-1.054,7.071-2.929l32.98-32.981
			C86.938,472.185,86.938,465.853,83.032,461.947z M42.982,487.857l-18.839-18.839l18.839-18.839l18.839,18.839L42.982,487.857z"/>
	</g>
</g>
<g>
	<g>
		<path d="M494.359,327.405c-6.64-16.969-15.126-34.573-25.205-52.368C469.706,268.742,470,262.394,470,256
			c0-57.162-22.26-110.902-62.679-151.321C366.901,64.26,313.161,42,256,42c-6.395,0-12.743,0.294-19.037,0.845
			c-17.798-10.08-35.403-18.566-52.367-25.203C116.613-8.958,60.92-5.36,27.777,27.778C-5.359,60.917-8.958,116.609,17.643,184.596
			c6.709,17.146,15.181,34.708,25.208,52.405c-4.035,45.649,6.794,91.993,30.654,130.853c1.888,3.074,5.17,4.769,8.531,4.769
			c1.784,0,3.591-0.478,5.223-1.479c4.706-2.89,6.18-9.047,3.289-13.754c-16.393-26.699-25.994-57.306-28.089-88.587
			c22.473,33.75,50.16,67.385,81.757,98.983c31.6,31.598,65.236,59.285,98.987,81.759c-31.732-2.129-62.774-11.989-89.722-28.792
			c-4.688-2.922-10.854-1.491-13.776,3.194c-2.923,4.687-1.492,10.854,3.194,13.776c33.802,21.077,73.424,32.264,113.36,32.264
			c6.246,0,12.503-0.283,18.744-0.835c17.696,10.027,35.257,18.499,52.403,25.207C357.323,506.064,384.945,512,409.507,512
			c31.146,0,56.283-9.346,74.717-27.777C517.361,451.083,520.96,395.391,494.359,327.405z M403.294,143.141
			c0,18.748-15.252,34-34,34s-34-15.252-34-34s15.252-34,34-34S403.294,124.393,403.294,143.141z M357.255,90.51
			c-23.998,5.487-41.962,26.993-41.962,52.631c0,29.776,24.225,54,54,54c25.564,0,47.021-17.863,52.583-41.759
			c45.258,74.619,35.702,173.397-28.698,237.797c-10.052,10.053-21.167,18.959-33.046,26.533c-7.404-2.235-15.22-5.106-23.396-8.633
			c-37.489-16.169-78.507-43.957-117.582-79.431c0.017-0.236,0.036-0.471,0.036-0.71c0-20.367,16.569-36.937,36.937-36.937
			s36.937,16.569,36.937,36.937c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10c0-31.395-25.542-56.937-56.937-56.937
			c-25.844,0-47.708,17.315-54.636,40.949c-1.236-1.216-2.472-2.436-3.702-3.667c-45.207-45.206-80.648-94.552-99.797-138.947
			c-2.736-6.343-5.082-12.472-7.041-18.358c7.321-11.818,15.971-22.884,25.735-32.957c22.433,6.929,35.992,30.245,30.473,53.408
			c-2.037,8.547-6.471,16.239-12.822,22.243c-4.014,3.794-4.191,10.123-0.397,14.137c1.967,2.081,4.614,3.13,7.269,3.13
			c2.465,0,4.935-0.906,6.867-2.733c9.188-8.685,15.598-19.799,18.539-32.141c7.088-29.752-7.615-59.678-33.743-72.982
			C197.167,53.196,287.789,48.007,357.255,90.51z M424.697,415.251c-8.049,8.049-21.023,11.331-37.639,9.921
			c7.098-5.513,13.88-11.468,20.264-17.851c10.155-10.155,19.161-21.152,26.958-32.832
			C436.388,392.688,433.164,406.785,424.697,415.251z M84.57,127.888c-2.776-19.444,0.275-34.539,9.249-43.513
			c9.404-9.406,25.694-12.342,46.846-8.709c-12.856,8.258-24.923,17.95-35.986,29.014C97.417,111.944,90.698,119.711,84.57,127.888z
			 M470.081,470.08C455.534,484.625,435.154,492,409.507,492c-22.057,0-47.228-5.473-74.814-16.267
			c-57.461-22.483-120.085-65.843-176.334-122.091C102.109,297.394,58.75,234.77,36.268,177.309
			C12.74,117.177,14.747,69.095,41.919,41.921c27.177-27.174,75.261-29.182,135.39-5.654c8.852,3.463,17.905,7.473,27.083,11.969
			c-13.045,3.215-25.71,7.658-37.864,13.257c-38.858-12.237-68.891-9.219-86.851,8.739c-21.402,21.403-21.42,60.477-0.049,110.024
			c20.126,46.662,57.067,98.217,104.019,145.169c46.952,46.951,98.507,83.893,145.169,104.019
			c24.755,10.677,46.893,16.016,65.521,16.015c18.656,0,33.792-5.355,44.502-16.064c17.064-17.064,20.637-45.098,10.416-81.235
			c6.196-12.969,11.057-26.542,14.509-40.55c4.497,9.177,8.506,18.23,11.97,27.083C499.261,394.823,497.253,442.905,470.081,470.08z
			"/>
	</g>
</g>
<g>
	<g>
		<path d="M416.071,246c-5.522,0-10,4.477-10,10c0,27.955-7.725,55.218-22.339,78.845c-2.906,4.698-1.453,10.861,3.244,13.766
			c1.64,1.014,3.456,1.496,5.251,1.496c3.35,0,6.623-1.683,8.515-4.74c16.57-26.791,25.329-57.693,25.329-89.367
			C426.071,250.477,421.593,246,416.071,246z"/>
	</g>
</g>
<g>
	<g>
		<path d="M376.799,362.658c-3.596-4.193-9.907-4.68-14.101-1.085c-0.389,0.333-0.771,0.716-1.104,1.104
			c-3.594,4.195-3.109,10.508,1.085,14.102c1.886,1.616,4.2,2.407,6.503,2.407c2.583,0,5.151-0.995,7.085-2.938
			C379.944,372.591,380.229,366.659,376.799,362.658z"/>
	</g>
</g>
      </React.Fragment>
    ),
    viewBox: "0 0 512 512",
  },
  neptune: {
    shape: (
      <React.Fragment>
        <g id="Icons"><path d="M23.331,6.86a1,1,0,0,1-.4-1.916c.89-.391,1.823-.756,2.85-1.117a1,1,0,1,1,.663,1.886c-.979.345-1.865.692-2.709,1.062A.983.983,0,0,1,23.331,6.86Z"/><path d="M37,72A34.823,34.823,0,0,1,2.01,38.029C2,37.69,2,37.34,2,37a35.493,35.493,0,0,1,.741-7.2,34.475,34.475,0,0,1,6.332-13.89,1,1,0,1,1,1.594,1.208A32.5,32.5,0,0,0,4.7,30.2,33.425,33.425,0,0,0,4,37c0,.32,0,.65.009.97A33.006,33.006,0,0,0,62.624,57.8a33.342,33.342,0,0,0,3.728-5.7,33.078,33.078,0,0,0,0-30.2,33.355,33.355,0,0,0-3.727-5.7A32.909,32.909,0,0,0,37,4a32.508,32.508,0,0,0-3.658.2,1,1,0,0,1-.224-1.988A35.007,35.007,0,0,1,64.176,14.939a34.967,34.967,0,0,1,0,44.122A34.9,34.9,0,0,1,37,72Z"/><path d="M14.92,12.14a1,1,0,0,1-.644-1.765c.849-.713,1.628-1.321,2.384-1.859a1,1,0,1,1,1.16,1.629c-.712.507-1.45,1.083-2.257,1.761A1,1,0,0,1,14.92,12.14Z"/><path d="M63.4,16.57H45a1,1,0,0,1,0-2H63.4a1,1,0,1,1,0,2Z"/><path d="M67.24,22.44H40a1,1,0,0,1,0-2H67.24a1,1,0,0,1,0,2Z"/><path d="M63.4,59.43H50a1,1,0,0,1,0-2H63.4a1,1,0,1,1,0,2Z"/><path d="M67.24,53.56H45a1,1,0,0,1,0-2H67.24a1,1,0,0,1,0,2Z"/><path d="M16.62,31H3.72a1,1,0,1,1,0-2h12.9a1,1,0,1,1,0,2Z"/><path d="M20.62,39H3.01a1,1,0,1,1,0-2H20.62a1,1,0,1,1,0,2Z"/><path d="M26.375,39H25a1,1,0,0,1,0-2h1.375a1,1,0,0,1,0,2Z"/><path d="M27,21H23.5a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z"/><path d="M32,58H25.25a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/><path d="M41,47H37a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/><path d="M53,37H49a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z"/></g>
      </React.Fragment>
    ),
    viewBox: "0 0 74 74",
  }
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross" | "flash" | "astronaut" | "mercury" | "startup" | "satellite" | "saturn" | "ufo" | "satellite2" | "planet" | "neptune"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG
