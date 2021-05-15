export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fieldsets: [{ title: 'Address', name: 'address' }],
  fields: [
    {
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'addressLine3',
      title: 'Address Line 3',
      type: 'string',
      fieldset: 'address',
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
    },
    {
      name: 'githubHandle',
      title: 'Github Handle',
      type: 'string',
    },
  ],
}
