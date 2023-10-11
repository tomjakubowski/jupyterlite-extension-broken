import {
  JupyterLiteServer,
  JupyterLiteServerPlugin,
  Router
} from '@jupyterlite/server';

import { ITranslator } from '@jupyterlab/translation';

console.log('Plugin loaded', ITranslator);

/**
 * Initialization data for the jupyterlite-nbconvert extension.
 */
const plugin: JupyterLiteServerPlugin<void> = {
  id: '@prospectiveco/jupyterlite-nbconvert:plugin',
  autoStart: true,
  requires: [ITranslator],
  activate: (app: JupyterLiteServer) => {
    console.log('Plugin activated', ITranslator);
    app.router.get('/api/nbconvert', async (req: Router.IRequest) => {
      return new Response(
        JSON.stringify({
          html: {
            output_mimetype: 'text/html'
          },
          markdown: {
            output_mimetype: 'text/markdown'
          },
          pdf: {
            output_mimetype: 'application/pdf'
          }
        })
      );
    });
  }
};

export default plugin;
