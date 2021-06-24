import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import Emoji from 'react-emoji-render'

export default () =>
  S.list()
    .title('digitalhumanities.mit.edu')
    .items([
      S.listItem()
        .title('Landing Page')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="🏠" />)
        .child(
          S.editor()
            .title('Landing Page')
            .schemaType('landingPage')
            .documentId('landingPage'),
        ),
      S.listItem()
        .title('Footer')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="👟" />)
        .child(
          S.editor()
            .title('Footer')
            .schemaType('footer')
            .documentId('footer'),
        ),
      S.listItem()
        .title('Configuration')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="🌎" />)
        .child(
          S.editor()
            .title('Config')
            .schemaType('config')
            .documentId('config'),
        ),

      S.divider(),

      S.listItem()
        .title('Projects')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="💻" />)
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('Projects')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="💻" />)
                .child(S.documentTypeList('project').title('Projects')),
              S.listItem()
                .title('Settings')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="⚙️" />)
                .child(
                  S.editor()
                    .title('Settings')
                    .schemaType('projectSettings')
                    .documentId('projectSettings'),
                ),
              S.listItem()
                .title('Categories')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="🏷️" />)
                .child(
                  S.documentTypeList('projectCategory').title('Categories'),
                ),
            ]),
        ),
      S.listItem()
        .title('Posts')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="🖊️" />)
        .child(
          S.list()
            .title('Posts')
            .items([
              S.listItem()
                .title('Posts')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="🖊️" />)
                .child(S.documentTypeList('post').title('Posts')),
              S.listItem()
                .title('Settings')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="⚙️" />)
                .child(
                  S.editor()
                    .title('Settings')
                    .schemaType('postSettings')
                    .documentId('postSettings'),
                ),
              S.listItem()
                .title('Categories')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="🏷️" />)
                .child(S.documentTypeList('postCategory').title('Categories')),
              S.listItem()
                .title('Collections')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="✨" />)
                .child(
                  S.documentTypeList('postCollection').title('Collections'),
                ),
            ]),
        ),
      S.listItem()
        .title('People')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="🤸🏻‍" />)
        .child(
          S.list()
            .title('People')
            .items([
              S.listItem()
                .title('People')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="🤸🏻‍" />)
                .child(S.documentTypeList('person').title('People')),
              S.listItem()
                .title('Settings')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="⚙️" />)
                .child(
                  S.editor()
                    .title('Settings')
                    .schemaType('personSettings')
                    .documentId('personSettings'),
                ),
              S.listItem()
                .title('Groups')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="🏷️" />)
                .child(S.documentTypeList('personGroup').title('Groups')),
            ]),
        ),
      ,
      S.listItem()
        .title('Events')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="🗓️" />)
        .child(S.documentTypeList('event').title('Events')),

      S.divider(),

      S.listItem()
        .title('Deprecated')
        .icon(() => <Emoji style={{ fontSize: 23 }} text="✖️" />)
        .child(
          S.list()
            .title('Deprecated')
            .items([
              S.listItem()
                .title('Faculty Spotlight')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="✨" />)
                .child(
                  S.documentTypeList('facultySpotlight').title(
                    'Faculty Spotlight',
                  ),
                ),
              S.listItem()
                .title('Publications')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="📔" />)
                .child(S.documentTypeList('publication').title('Publications')),
              S.listItem()
                .title('Calls')
                .icon(() => <Emoji style={{ fontSize: 23 }} text="📔" />)
                .child(S.documentTypeList('call').title('Calls')),
            ]),
        ),
    ])
