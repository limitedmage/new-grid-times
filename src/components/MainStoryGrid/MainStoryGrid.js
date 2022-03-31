import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryItem key={story.id}>
              <SecondaryStory key={story.id} {...story} />
            </StoryItem>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryItem key={story.id}>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoryItem>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --breathing-room: 16px;
  --divider: 1px solid var(--color-gray-300);

  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 0;
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      "main-story      secondary-stories"
      "advertisement   advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-columns: 1fr 400px 300px;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement     advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--breathing-room);
    border-right: var(--divider);
    margin-right: var(--breathing-room);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: var(--breathing-room);
    border-right: var(--divider);
    margin-right: var(--breathing-room);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StoryItem = styled.div`
  &:not(:last-of-type) {
    padding-bottom: var(--breathing-room);
    border-bottom: var(--divider);
    margin-bottom: var(--breathing-room);
  }
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const OpinionStoryItem = styled(StoryItem)`
  flex: 1;
  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      border-bottom: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
    margin-bottom: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: var(--breathing-room);
    border-top: var(--divider);
    margin-top: var(--breathing-room);
  }
`;

export default MainStoryGrid;
