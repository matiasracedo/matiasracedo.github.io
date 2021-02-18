/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="planet" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <SVG icon="astronaut" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="ufo" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="astronaut" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="startup" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <SVG icon="ufo" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="saturn" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="astronaut" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="saturn" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="saturn" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="planet" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="planet" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="mercury" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
