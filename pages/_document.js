

import Document, { Head, Main, NextScript } from "next/document";
// styled-jsx included in Next.js by default
import flush from "styled-jsx/server";

import { getSessionFromServer, getUserScript } from "../lib/auth";


class MyDocument extends Document {
  static getInitialProps = ctx => {
    const user = getSessionFromServer(ctx.req);
    console.log(user)
    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    const page = ctx.renderPage(Component => {
      const WrappedComponent = props => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };
      return WrappedComponent;
    });

    return {
      ...user,
      ...page,
      pageContext,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: pageContext.sheetsRegistry.toString()
            }}
          />
          {flush() || null}
        </React.Fragment>
      )
    };
  };

 render() {
    const { pageContext, user = {} } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
        <link 
                        rel="shortcut icon"
                        href="/static/favicon.ico"
                        type="image.x-icon"
                    />
                    
                    <link rel="icon" href="/static/favicon.ico" />
                    <link 
                        rel="icon" 
                        type="image/png"
                        sizes="32x32"
                        href="/static/favicon-32x32.png"
                    />
                    <link 
                        rel="icon" 
                        type="image/png"
                        sizes="16x16"
                        href="/static/favicon-16x16.png"
                    />
                    <meta charSet="utf-8" />
                    <meta 
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta 
                        name="theme-color"
                        content={pageContext.theme.palette.primary.main}
                    />
                    <meta
                        name="description"
                        content="The Hot Room Yoga and Wellness Studio TN"
                    />
        </Head>
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
