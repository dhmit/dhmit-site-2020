export default {
  type: 'document',
  title: 'Footer',
  name: 'footer',
  fieldsets: [{ title: 'Address', name: 'address' }],
  fields: [
    {
      title: 'Address Line 1',
      name: 'addressLine1',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'Address Line 2',
      name: 'addressLine2',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'Address Line 3',
      name: 'addressLine3',
      type: 'string',
      fieldset: 'address',
    },
    {
      title: 'Phone number',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Email Address',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Twitter Handle',
      name: 'twitterHandle',
      type: 'string',
    },
    {
      title: 'Mellon Logo',
      name: 'mellonLogo',
      type: 'a11yImage',
    },
  ],
}
