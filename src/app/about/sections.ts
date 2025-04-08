import { AboutSectionType } from '@/components/Components/AboutSection/aboutSectionType';

export const sections: AboutSectionType[] = [
  {
    imageAlign: 'right',
    title: 'What is Blogify?',
    description:
      "Blogify is a fully responsive full-stack web application, that has been created as a part of the Master's thesis, which is focusing on web accessibility. Blogify enables authorized users to manage blog posts. This involves creation, read, update or deletion of blog posts. Users can be authorized using a sign up form, requiring e-mail address and password, which has to be confirmed. Otherwise, they can only browse and read posts without being able to create and manage their own.",
    img: '/home_page_unauthorized.png',
  },
  {
    imageAlign: 'left',
    title: 'Registration',
    description:
      'As mentioned, sign up is possible\n' +
      'through form, requiring e-mail address and password, which have to be\n' +
      'confirmed. Sign in is also possible through form on sign in page, requiring\n' +
      'credentials, which were used for registration at the beginning - e-mail address\n' +
      'and password. Both forms have tooltips, which serve to provide instructions to the user.',
    img: '/signup.png',
  },
  {
    imageAlign: 'right',
    title: 'Creating and Updating Blog Posts',
    description:
      'For creating a blog post, user has to be authorized and click on the button on\n' +
      'the right side of the home page. This button is shown after user authorization\n' +
      'and provides redirection to a new route for creating a new blog post. Rich text\n' +
      'editor offers the possibility to insert a multiple types of content, including\n' +
      'images and provides the possibility to avoid situations where a user, even by\n' +
      'mistake, inserts a malicious content.',
    img: '/homepage.png',
  },
  {
    imageAlign: 'left',
    title: 'Deleting Blog Posts',
    description:
      "For deleting a blog post, user has to be authorized and click on the icon for deletion in a blog post preview. After that, a confirmation dialog is shown, requiring user's confirmation.",
    img: '/confirmation_dialog.png',
  },
];
