import { Container, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Typography } from '@material-ui/core'
import { ExpandMore, NotificationsNone } from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import Link from 'components/Link'
import { imageSrc } from 'config'
import GAMES from 'constant/games'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useMemo, useState } from 'react'
import MarqueeText from 'react-marquee-text-component'
import Carousel from 'react-slick'
import { get } from 'services/http'
import { carousels } from '../constant'
import { introDetail, introTitle } from '../content'
import '../style.scss'

const settingsCarousel = {
  autoplay: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipeToSlide: true
};

const Home: React.FC = () => {
  const [runningText, setRunningText] = useState('')
  const [, withLoading] = useLoading(false)
  const [expanded, setExpanded] = React.useState<string | false>('1')

  const handleChangeExpand = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  };

  useEffect(() => {
    const fetchText = async () => {
      const textString = await withLoading(() => get({
        path: 'runningText'
      }))
        .catch((err) => err)
      setRunningText(textString)
    }
    fetchText()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='browser-home-page'>
      <Header />

      {/* Carousel */}
      <Carousel {...settingsCarousel}>
        {
          map((item: string) =>
            <div key={item}>
              <img className='slide' alt='hokibet188' src={`${imageSrc}/home-carousel/${item}`} />
            </div>
          , carousels)
        }
      </Carousel>
      <Container className="announcement" maxWidth="lg">
        <NotificationsNone />
        <MarqueeText className="marquee" text={runningText} duration={30} repeat={2} />
      </Container>
      {/* Provider list */}
      <Container maxWidth="lg">
        <Grid container={true}>
          {map(({ idName, route = '', title }) => {
            return(
              <Grid item={true} xs={3} className="home-icon">
                <Link href={route}><img className='logo' alt='hokibet188' src={`${process.env.PUBLIC_URL}/images/home/${idName}.png`} /></Link>
              </Grid>)
          }, GAMES)}
        </Grid>
      </Container>
      {/* Text intro */}
      <Container className="text-home" maxWidth="lg">
        <div dangerouslySetInnerHTML={{ __html: introTitle }} />
        <div dangerouslySetInnerHTML={{ __html: introDetail }} />
      </Container>
    </div>
  )
}

export default Home
