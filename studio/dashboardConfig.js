export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61117a56de851d225e9b2772',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m1z2693n',
                  apiId: '3faca09b-d81f-4ade-b617-77daa45ad3df'
                },
                {
                  buildHookId: '61117a56fec24e242a575a77',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rh8jm6ve',
                  apiId: '81960158-14d2-4b3c-9d5f-ca7307690f2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bdrawe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rh8jm6ve.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
