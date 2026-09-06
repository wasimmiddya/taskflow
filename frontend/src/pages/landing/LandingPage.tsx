import React from 'react'
import { HeroSection } from './components/HeroSection'
import { SprintBoardPreview } from './components/SprintBoardPreview'
import { FeatureCardsSection } from './components/FeatureCardsSection'
import { AccomplishmentsSection } from './components/AccomplishmentsSection'

export const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SprintBoardPreview />
      <FeatureCardsSection />
      <AccomplishmentsSection />
    </>
  )
}

export default LandingPage
