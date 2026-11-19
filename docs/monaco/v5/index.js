import { initRightEditor } from './components/right/js/index.js';
import { initLeftWorkspace } from './components/left/js/index.js';

async function boot() {
  try {
    const definitions = window.ks.declarative.definitions.data;
    const editor = await initRightEditor(definitions);
    await initLeftWorkspace({ definitions, editor });
  } catch (error) {
    console.error('[Definitions Explorer V5]', error);
  }
}

boot();