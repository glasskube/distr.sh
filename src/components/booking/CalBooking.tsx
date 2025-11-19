import {useEffect, useRef} from 'preact/hooks';

interface CalBookingProps {
  calLink?: string;
  namespace?: string;
  layout?: 'month_view' | 'week_view' | 'column_view';
  calOrigin?: string;
  embedJsUrl?: string;
  hideEventTypeDetails?: boolean;
}

// Declare global Cal API
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalBooking({
  calLink = 'team/gk/demo',
  namespace = 'demo',
  layout = 'week_view',
  calOrigin = 'https://cal.glasskube.com',
  embedJsUrl = 'https://cal.glasskube.com/embed/embed.js',
  hideEventTypeDetails = true,
}: CalBookingProps) {
  const calRef = useRef<HTMLDivElement>(null);
  const elementId = `cal-inline-${namespace}`;

  useEffect(() => {
    // Cal.com embed initialization - ported from vanilla JS
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, embedJsUrl, 'init');

    // Initialize Cal with namespace and origin
    window.Cal('init', namespace, {origin: calOrigin});

    // Configure inline embed
    window.Cal.ns[namespace]('inline', {
      elementOrSelector: `#${elementId}`,
      config: {layout: layout},
      calLink: calLink,
    });

    // Configure UI
    window.Cal.ns[namespace]('ui', {
      hideEventTypeDetails: hideEventTypeDetails,
      layout: layout,
    });
  }, [
    namespace,
    embedJsUrl,
    calOrigin,
    layout,
    calLink,
    hideEventTypeDetails,
    elementId,
  ]);

  return (
    <div
      id={elementId}
      ref={calRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'scroll',
      }}
    />
  );
}
