// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import a11yImage from './objects/a11yImage'
import a11yImageWithCaption from './objects/a11yImageWithCaption'
import externalLink from './objects/externalLink'
import richText from './objects/richText'
import aboutCarouselItem from './objects/aboutCarouselItem'
import accordionItem from './objects/accordionItem'

import config from './documents/config'
import project from './documents/project'
import projectSettings from './documents/projectSettings'
import projectCategory from './documents/projectCategory'
import person from './documents/person'
import personGroup from './documents/personGroup'
import personSettings from './documents/personSettings'
import event from './documents/event'
import call from './documents/call'
import facultySpotlight from './documents/facultySpotlight'
import publication from './documents/publication'
import landingPage from './documents/landingPage'
import post from './documents/post'
import postCategory from './documents/postCategory'
import postSettings from './documents/postSettings'
import postCollection from './documents/postCollection'
import footer from './documents/footer'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // objects
    a11yImage,
    a11yImageWithCaption,
    externalLink,
    richText,
    aboutCarouselItem,
    accordionItem,

    // documents
    landingPage,
    footer,
    config,
    project,
    post,
    postCategory,
    postSettings,
    postCollection,
    person,
    personGroup,
    personSettings,
    projectCategory,
    event,
    projectSettings,
    call,
    facultySpotlight,
    publication,
  ]),
})
