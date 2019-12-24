import React from 'react';
import { Link, useIntl } from 'gatsby-plugin-intl';
import { dateFormat } from '../utils/defaults';

const FrontItem = ({ node: { frontmatter: { title, date, description }, fields: { slug }, excerpt } }) => {
  const { formatDate } = useIntl();
  const itemTitle = title || slug;
  return (
    <article>
      <header>
        <h3>
          <Link to={slug}>
            {itemTitle}
          </Link>
        </h3>
        <small>{formatDate(date, dateFormat)}</small>
      </header>
      <section>
        <p>
          {description || excerpt}
        </p>
      </section>
    </article>
  );
}

export default FrontItem;