import { HiOutlineHome, HiOutlineInformationCircle, HiOutlineBookOpen  } from 'react-icons/hi';

export const siteStructure = (S: any) =>
  S.list()
    .title('Site Structure')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(HiOutlineHome)
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('About Page')
        .icon(HiOutlineInformationCircle)
        .child(
          S.document()
            .schemaType('page')
            .documentId('about')
        ),
      S.listItem()
        .title('Directory')
        .icon(HiOutlineBookOpen)
        .schemaType('group')
        .child(
          S.list()
            .title('Directory')
            .items([
              S.listItem()
                .title('Phytoplankton')
                .schemaType('group')
                .child(
                  S.documentList()
                    .title('Phytoplankton')
                    .filter('_type == "component" && group == "phytoplankton"')
                    .child(
                      S.list()
                        .title('Components')
                        .items([
                          S.listItem()
                            .title('Components')
                            .schemaType('component')
                            .child(
                              S.documentList()
                                .title('Components')
                                .schemaType('species')
                            ),
                        ])
                    )
                ),
              S.listItem()
                .title('Zooplankton')
                .schemaType('group')
                .child(
                  S.documentList()
                    .title('Zooplankton')
                    .filter('_type == "component" && group == "zooplankton"')
                ),
                ])

        ),
    ]);