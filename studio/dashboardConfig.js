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
                  buildHookId: '62da53367e23815f042d78e1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nb8hh543',
                  apiId: '037ef640-7a5b-4c20-974b-a53ff74ad839'
                },
                {
                  buildHookId: '62da5336a86e9a600174dc1a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6p5hjtsn',
                  apiId: 'e9cffdb9-294e-442f-b94d-e91c1649460f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hermessecund/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6p5hjtsn.netlify.app', category: 'apps'}
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
