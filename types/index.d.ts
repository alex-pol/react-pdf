// Type definitions for react-pdf 5.0
// Project: https://github.com/wojtekmaj/react-pdf/
// Definitions by: CodeDaraW <https://github.com/CodeDaraW>
//                 Nathan Hardy <https://github.com/nhardy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import Document, { Props as DocumentProps } from "./Document.d.ts";
import Outline, { Props as OutlineProps } from "./Outline.d.ts";
import Page, {
  Props as PageProps,
  PDFPageItem,
  TextLayerItemInternal,
  LoadingProcessData,
  TextItem,
  PDFPageProxy,
} from "./Page.d.ts";
import pdfjs from "./pdfjs-dist.d.ts";

export {
  pdfjs,
  Document,
  Page,
  Outline,
  DocumentProps,
  PageProps,
  OutlineProps,
  PDFPageItem,
  TextLayerItemInternal,
  LoadingProcessData,
  TextItem,
  PDFPageProxy,
};
