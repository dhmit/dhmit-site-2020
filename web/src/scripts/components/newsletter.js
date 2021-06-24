import choozy from 'choozy'
import { add, on, remove } from 'martha'
import { component } from 'picoapp'
import astrochimp from 'astrochimp'

export default component((node, _ctx) => {
  const { form, message } = choozy(node)

  on(form, 'submit', (ev) => {
    ev.preventDefault()
    add(form, 'o50')
    astrochimp(
      'https://mit.us20.list-manage.com/subscribe/post?u=f73477000fc902adfc41c0b24&amp;id=e1d72432d4',
      {
        EMAIL: form.email.value,
      },
      (error, data) => {
        message.innerHTML = error?.msg ?? data?.msg
        form.remove()
        remove(message, 'dn')
      },
    )
  })
})
