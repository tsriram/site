import {StyleSheet, css} from 'aphrodite'
import sharedStyles from './shared-styles'
export default Links

function Links() {
  const {styles} = Links
  return (
    <ul className={css(sharedStyles.list, styles.linkList)}>
      {getLinks().map((link, i) => (
        <li key={i} className={css(sharedStyles.item)}>
          <a
            className={css(sharedStyles.link)}
            href={link.href}
            key={i}
            alt={link.alt || link.title}
          >
          {link.title}
          </a>
        </li>
      ))}
      </ul>
  )
}

function getLinks() {
  return [
    {
      href: 'http://suggest.javascriptair.com',
      title: 'Suggest Episodes',
    },
    {
      href: 'mailto:javascriptair+website@gmail.com',
      alt: 'Email JavaScript Air',
      title: 'Contact us',
    },
    {
      href: '/guests',
      alt: 'Guests',
      title: 'All Show Guests',
    },
    {
      href: 'http://jsair.io/email',
      alt: 'Show Notes Email Registration',
      title: 'Show Notes Email Registration',
    },
    {
      href: '/deals',
      alt: 'Deals',
      title: 'Deals',
    },
    {
      href: '/links-tips-picks',
      alt: 'All Links, Tips, and Picks ',
      title: 'All Links, Tips, and Picks ',
    },
    {
      href: 'https://github.com/javascriptair/CODE_OF_CONDUCT',
      alt: 'Code of Conduct',
      title: 'Code of Conduct',
    },
    {
      href: '/contributors',
      alt: 'Site Contributors',
      title: 'Site Contributors',
    },
  ]
}

Links.styles = StyleSheet.create({
  linkList: {
    '@media only screen and (min-width : 900px)': {
      height: '9em',
    },
  },
})

