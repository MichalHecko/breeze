/* @ds-bundle: {"format":4,"namespace":"Breeze","components":[{"name":"Button"},{"name":"TextField"},{"name":"Textarea"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"RadioCard"},{"name":"Segmented"},{"name":"Steps"},{"name":"Progress"},{"name":"Card"},{"name":"SummaryList"},{"name":"Badge"}]} */
/* Breeze — React komponenty postavené na Tailwind CSS v4 s layoutom a škálami Bootstrap 6. Všetok vzhľad sú
   utility triedy Tailwindu nad témou Breeze (assets/Tailwind/theme.css); bundle nemá vlastné CSS. */
(function () {
  var React = window.React;
  var h = React.createElement;

  var COLORS = ['canvas', 'surface', 'surface-sunken', 'primary-soft', 'line', 'line-strong', 'ink', 'ink-muted',
    'primary', 'primary-hover', 'on-primary', 'link', 'dusk', 'peach', 'on-peach',
    'success', 'success-soft', 'warning', 'warning-soft', 'danger', 'danger-soft', 'focus-ring'];
  var SPACERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  var RADII = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'pill'];
  /* Bootstrap 6 layout pre Tailwind v4 — rovnaký blok je na konci assets/Tailwind/theme.css. */
  var LAYOUT_CSS = "/* Bootstrap 6 \u2013 layout pre Tailwind v4: breakpointy, kontajnery, 12-st\u013apcov\u00e1 mrie\u017eka s medzerami, vrstvy, fokus. */\n@theme {\n  --breakpoint-sm: 36rem;\n  --breakpoint-md: 48rem;\n  --breakpoint-lg: 64rem;\n  --breakpoint-xl: 80rem;\n  --breakpoint-2xl: 96rem;\n}\n\n@utility container {\n  --gutter-x: var(--container-padding-x, 1.5rem);\n  --gutter-y: 0;\n  width: 100%;\n  max-width: 100%;\n  margin-inline: auto;\n  padding-inline: calc(var(--gutter-x) * 0.5);\n  @media (width >= 36rem) { max-width: var(--container-max-sm, 540px); }\n  @media (width >= 48rem) { max-width: var(--container-max-md, 720px); }\n  @media (width >= 64rem) { max-width: var(--container-max-lg, 960px); }\n  @media (width >= 80rem) { max-width: var(--container-max-xl, 1200px); }\n  @media (width >= 96rem) { max-width: var(--container-max-2xl, 1440px); }\n}\n@utility container-fluid {\n  --gutter-x: var(--container-padding-x, 1.5rem);\n  --gutter-y: 0;\n  width: 100%;\n  margin-inline: auto;\n  padding-inline: calc(var(--gutter-x) * 0.5);\n}\n\n@utility row {\n  --gutter-x: var(--grid-gutter-x, 1.5rem);\n  --gutter-y: var(--grid-gutter-y, 0);\n  display: flex;\n  flex-wrap: wrap;\n  margin-inline: calc(var(--gutter-x) * -0.5);\n  margin-top: calc(var(--gutter-y) * -1);\n  & > * {\n    box-sizing: border-box;\n    flex-shrink: 0;\n    width: 100%;\n    max-width: 100%;\n    padding-inline: calc(var(--gutter-x) * 0.5);\n    margin-top: var(--gutter-y);\n  }\n}\n@utility col { flex: 1 0 0; }\n@utility col-auto { flex: 0 0 auto; width: auto; }\n@utility col-* { flex: 0 0 auto; width: calc(100% * --value(integer) / 12); }\n@utility offset-* { margin-inline-start: calc(100% * --value(integer) / 12); }\n@utility row-cols-auto { & > * { flex: 0 0 auto; width: auto; } }\n@utility row-cols-* { & > * { flex: 0 0 auto; width: calc(100% / --value(integer)); } }\n@utility g-* { --gutter-x: --value(--spacer-*); --gutter-y: --value(--spacer-*); }\n@utility gx-* { --gutter-x: --value(--spacer-*); }\n@utility gy-* { --gutter-y: --value(--spacer-*); }\n\n@utility z-menu { z-index: var(--z-menu, 1000); }\n@utility z-sticky { z-index: var(--z-sticky, 1010); }\n@utility z-fixed { z-index: var(--z-fixed, 1020); }\n@utility z-drawer { z-index: var(--z-drawer, 1030); }\n@utility z-dialog { z-index: var(--z-dialog, 1040); }\n@utility z-popover { z-index: var(--z-popover, 1050); }\n@utility z-tooltip { z-index: var(--z-tooltip, 1060); }\n@utility z-toast { z-index: var(--z-toast, 1070); }\n\n@utility focus-ring {\n  &:focus-visible {\n    outline: var(--focus-ring-width, 3px) solid var(--color-focus-ring);\n    outline-offset: var(--focus-ring-offset, 1px);\n  }\n}\n";

  /* Iba pre náhľady s @tailwindcss/browser: zaregistruje kľúče témy, ktorých hodnoty prichádzajú z tokens.css.
     V projekte s buildom Tailwindu namiesto toho importujte theme.css. */
  function installTailwindTheme() {
    if (typeof document === 'undefined' || document.getElementById('breeze-tw-theme')) return;
    var lines = [];
    COLORS.forEach(function (c) { lines.push('--color-' + c + ': var(--color-' + c + ');'); });
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (s) { lines.push('--shadow-' + s + ': var(--shadow-' + s + ');'); });
    SPACERS.forEach(function (s) { lines.push('--spacer-' + s + ': var(--spacer-' + s + ');'); });
    RADII.forEach(function (r) { lines.push('--radius-' + r + ': var(--radius-' + r + ');'); });
    lines.push('--text-md: var(--text-md);', '--text-md--line-height: var(--text-md--line-height);');
    lines.push('--font-display: var(--font-display);');
    var el = document.createElement('style');
    el.type = 'text/tailwindcss';
    el.id = 'breeze-tw-theme';
    el.textContent = '@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));\n@theme {\n' + lines.join('\n') + '\n}\n' + LAYOUT_CSS;
    document.head.appendChild(el);
  }

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var r = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) r[k] = obj[k];
    return r;
  }
  function optValue(o) { return o !== null && typeof o === 'object' ? o.value : o; }
  function optLabel(o) { return o !== null && typeof o === 'object' ? (o.label !== undefined ? o.label : String(o.value)) : String(o); }

  /* Fokus tlačidiel a odkazov ako .focus-ring v Bootstrap 6: 3px čiara, odstup 1px, farba color-focus-ring. */
  var FOCUS = 'focus-ring';
  /* Fokus polí ako v Bootstrape: jemnejší okraj v primary a mäkká 4px žiara, bez outline. */
  /* Zaoblenie polí = zaoblenie bežného tlačidla (rounded-lg, 8px), aby polia a tlačidlá vedľa seba lícovali. */
  var INPUT = 'block w-full rounded-lg border bg-surface px-4 text-base text-ink shadow-xs transition-[border-color,box-shadow] duration-150 ' +
    'placeholder:text-ink-muted focus:outline-hidden focus:ring-4 ' +
    'disabled:cursor-not-allowed disabled:opacity-45';
  function border(error) { return error ? 'border-danger focus:ring-danger/25' : 'border-line-strong hover:border-ink-muted focus:border-primary/60 focus:ring-primary/25'; }
  var GLOW_PEER = 'peer-focus-visible:border-primary/60 peer-focus-visible:ring-4 peer-focus-visible:ring-primary/25';
  function described(id, p) { return (p.error || p.hint) ? id + '-hint' : undefined; }

  /* ---------- Button ---------- */
  var BTN_VARIANT = {
    primary: 'bg-primary text-on-primary hover:bg-primary-hover',
    secondary: 'border border-line bg-surface text-ink shadow-xs hover:border-line-strong',
    ghost: 'text-link hover:bg-primary-soft'
  };
  var BTN_SIZE = { sm: 'h-9 px-4 text-sm', md: 'h-11 px-6 text-base', lg: 'h-13 px-8 text-base' };
  /* Zaoblenie ako predvolené v Bootstrap 6: --btn-border-radius = --radius-5 (0.5rem) pre sm aj md, --radius-7 (0.75rem) pre lg. */
  var BTN_RADIUS = { sm: 'rounded-lg', md: 'rounded-lg', lg: 'rounded-xl' };
  function Button(p) {
    var variant = p.variant || 'primary';
    var size = p.size || 'md';
    var rest = omit(p, ['variant', 'size', 'block', 'icon', 'className', 'children']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors',
        BTN_RADIUS[size] || BTN_RADIUS.md,
        'disabled:cursor-not-allowed disabled:opacity-45', FOCUS, BTN_VARIANT[variant],
        variant === 'ghost' ? (size === 'sm' ? 'h-9 px-2 text-sm' : 'h-11 px-3 text-base') : BTN_SIZE[size],
        p.block && 'w-full', p.className)
    }), p.icon || null, p.children);
  }

  /* ---------- Field shell ---------- */
  function Field(o, control) {
    var msg = o.error || o.hint;
    return h('div', { className: cx('flex min-w-0 flex-col gap-2', o.className) },
      o.label ? h('label', { className: 'text-sm font-semibold text-ink', htmlFor: o.id }, o.label,
        o.optional ? h('span', { className: 'ml-1 font-normal text-ink-muted' }, '(nepovinné)') : null) : null,
      control,
      (msg || o.counter) ? h('div', { className: 'flex items-start justify-between gap-4' },
        msg ? h('p', { id: o.id + '-hint', className: cx('text-sm', o.error ? 'text-danger' : 'text-ink-muted') }, msg) : h('span'),
        o.counter || null) : null);
  }

  /* ---------- TextField ---------- */
  function TextField(p) {
    var auto = React.useId();
    var id = p.id || auto;
    var rest = omit(p, ['label', 'hint', 'error', 'id', 'className', 'trailing', 'optional']);
    var input = h('input', Object.assign({ type: 'text' }, rest, {
      id: id,
      className: cx(INPUT, 'h-12', border(p.error), p.trailing && 'pr-12'),
      'aria-invalid': p.error ? true : undefined,
      'aria-describedby': described(id, p)
    }));
    var control = p.trailing
      ? h('div', { className: 'relative' }, input, h('div', { className: 'absolute inset-y-0 right-2 flex items-center' }, p.trailing))
      : input;
    return Field({ id: id, label: p.label, hint: p.hint, error: p.error, optional: p.optional, className: p.className }, control);
  }

  /* ---------- Textarea ---------- */
  function Textarea(p) {
    var auto = React.useId();
    var id = p.id || auto;
    var initial = String(p.value !== undefined ? p.value : (p.defaultValue || '')).length;
    var st = React.useState(initial);
    var length = p.value !== undefined ? String(p.value).length : st[0];
    var rest = omit(p, ['label', 'hint', 'error', 'id', 'className', 'optional', 'onChange']);
    var area = h('textarea', Object.assign({ rows: 4 }, rest, {
      id: id,
      className: cx(INPUT, 'min-h-28 resize-y py-3 leading-6', border(p.error)),
      onChange: function (e) { st[1](e.target.value.length); if (p.onChange) p.onChange(e); },
      'aria-invalid': p.error ? true : undefined,
      'aria-describedby': described(id, p)
    }));
    var counter = p.maxLength ? h('span', { className: 'shrink-0 text-sm tabular-nums text-ink-muted', 'aria-live': 'polite' }, length + ' / ' + p.maxLength) : null;
    return Field({ id: id, label: p.label, hint: p.hint, error: p.error, optional: p.optional, className: p.className, counter: counter }, area);
  }

  /* ---------- Select ---------- */
  function Select(p) {
    var auto = React.useId();
    var id = p.id || auto;
    var rest = omit(p, ['label', 'hint', 'error', 'id', 'className', 'options', 'placeholder', 'optional']);
    if (p.placeholder && rest.value === undefined && rest.defaultValue === undefined) rest.defaultValue = '';
    var opts = (p.options || []).map(function (o) {
      return h('option', { key: String(optValue(o)), value: optValue(o), disabled: o && o.disabled }, optLabel(o));
    });
    if (p.placeholder) opts.unshift(h('option', { key: '__placeholder', value: '', disabled: true }, p.placeholder));
    var control = h('div', { className: 'relative' },
      h('select', Object.assign({}, rest, {
        id: id,
        className: cx(INPUT, 'h-12 cursor-pointer appearance-none pr-11', border(p.error)),
        'aria-invalid': p.error ? true : undefined,
        'aria-describedby': described(id, p)
      }), opts),
      h('svg', { className: 'pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-muted', viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
        h('path', { d: 'M4 6l4 4 4-4', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' })));
    return Field({ id: id, label: p.label, hint: p.hint, error: p.error, optional: p.optional, className: p.className }, control);
  }

  /* ---------- Checkbox ---------- */
  function Checkbox(p) {
    var auto = React.useId();
    var id = p.id || auto;
    var rest = omit(p, ['label', 'description', 'error', 'className', 'id']);
    return h('div', { className: cx('flex flex-col gap-1.5', p.className) },
      h('label', { htmlFor: id, className: cx('group flex items-start gap-3', p.disabled ? 'cursor-not-allowed opacity-45' : 'cursor-pointer') },
        h('input', Object.assign({ type: 'checkbox' }, rest, {
          id: id, className: 'peer sr-only',
          'aria-invalid': p.error ? true : undefined,
          'aria-describedby': p.error ? id + '-err' : undefined
        })),
        h('span', {
          'aria-hidden': true,
          className: cx('mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border-2 bg-surface text-on-primary transition-colors',
            'peer-checked:border-primary peer-checked:bg-primary', GLOW_PEER,
            '[&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100',
            p.error ? 'border-danger' : 'border-line-strong group-hover:border-ink-muted')
        }, h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, fill: 'none', className: 'transition-opacity' },
          h('path', { d: 'M3.5 8.5l3 3 6-7', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }))),
        h('span', { className: 'flex min-w-0 flex-col gap-0.5' },
          h('span', { className: 'text-base text-ink' }, p.label),
          p.description ? h('span', { className: 'text-sm text-ink-muted' }, p.description) : null)),
      p.error ? h('p', { id: id + '-err', className: 'pl-8 text-sm text-danger' }, p.error) : null);
  }

  /* ---------- Switch ---------- */
  function Switch(p) {
    var auto = React.useId();
    var id = p.id || auto;
    var st = React.useState(!!p.defaultChecked);
    var controlled = p.checked !== undefined;
    var on = controlled ? p.checked : st[0];
    function toggle() {
      if (p.disabled) return;
      if (!controlled) st[1](!on);
      if (p.onChange) p.onChange(!on);
    }
    var btn = h('button', {
      type: 'button', role: 'switch', id: id, name: p.name, disabled: p.disabled, onClick: toggle,
      'aria-checked': on,
      'aria-label': p.label ? undefined : p['aria-label'],
      'aria-describedby': p.description ? id + '-desc' : undefined,
      className: cx('relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-hidden focus-visible:ring-4 focus-visible:ring-primary/25', on ? 'bg-primary' : 'bg-line-strong')
    }, h('span', { 'aria-hidden': true, className: cx('size-5 rounded-full bg-surface shadow-sm transition-transform', on ? 'translate-x-5.5' : 'translate-x-0.5') }));
    if (!p.label) return btn;
    return h('div', { className: cx('flex items-center justify-between gap-6', p.className) },
      h('div', { className: 'flex min-w-0 flex-col gap-0.5' },
        h('label', { htmlFor: id, className: 'cursor-pointer text-base text-ink' }, p.label),
        p.description ? h('span', { id: id + '-desc', className: 'text-sm text-ink-muted' }, p.description) : null),
      btn);
  }

  /* ---------- RadioCard ---------- */
  function RadioCard(p) {
    var rest = omit(p, ['label', 'description', 'action', 'onAction', 'className']);
    return h('div', {
      className: cx('relative flex items-center rounded-xl transition-colors hover:bg-surface-sunken has-checked:bg-primary-soft has-checked:hover:bg-primary-soft',
        p.disabled && 'opacity-45', p.className)
    },
      h('label', { className: cx('flex min-w-0 flex-1 items-center gap-4 px-5 py-4', p.disabled ? 'cursor-not-allowed' : 'cursor-pointer') },
        h('input', Object.assign({ type: 'radio' }, rest, { className: 'peer sr-only' })),
        h('span', {
          'aria-hidden': true,
          className: 'size-5.5 shrink-0 rounded-full border-2 border-line-strong bg-surface transition-all peer-checked:border-7 peer-checked:border-primary ' + GLOW_PEER
        }),
        h('span', { className: 'flex min-w-0 flex-col gap-0.5' },
          h('span', { className: 'text-base text-ink' }, p.label),
          p.description ? h('span', { className: 'text-sm text-ink-muted' }, p.description) : null)),
      p.action ? h('button', {
        type: 'button', onClick: p.onAction, disabled: p.disabled,
        className: cx('mr-3 shrink-0 cursor-pointer rounded-md p-2 text-base font-medium text-link underline-offset-4 hover:underline', FOCUS)
      }, p.action) : null);
  }

  /* ---------- Segmented ---------- */
  function Segmented(p) {
    var options = p.options || [];
    var labelId = React.useId();
    var initial = p.defaultValue !== undefined ? p.defaultValue : (options.length ? optValue(options[0]) : undefined);
    var st = React.useState(initial);
    var controlled = p.value !== undefined;
    var current = controlled ? p.value : st[0];
    function pick(v) { if (!controlled) st[1](v); if (p.onChange) p.onChange(v); }
    function onKeyDown(e, i) {
      var step = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      var n = (i + step + options.length) % options.length;
      pick(optValue(options[n]));
      var sib = e.currentTarget.parentNode.children[n];
      if (sib) sib.focus();
    }
    var group = h('div', {
      role: 'radiogroup',
      'aria-labelledby': p.label ? labelId : undefined,
      'aria-label': p.label ? undefined : p['aria-label'],
      className: 'flex gap-1 rounded-2xl bg-surface-sunken p-1'
    }, options.map(function (o, i) {
      var v = optValue(o);
      var on = v === current;
      return h('button', {
        key: String(v), type: 'button', role: 'radio', 'aria-checked': on, tabIndex: on ? 0 : -1,
        onClick: function () { pick(v); },
        onKeyDown: function (e) { onKeyDown(e, i); },
        className: cx('inline-flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border px-4 text-sm font-medium transition-colors', FOCUS,
          on ? 'border-line bg-surface text-ink shadow-xs' : 'border-transparent text-ink-muted hover:text-ink')
      }, (o && o.icon) || null, optLabel(o));
    }));
    if (!p.label) return h('div', { className: p.className }, group);
    return h('div', { className: cx('flex flex-col gap-2', p.className) },
      h('span', { id: labelId, className: 'text-sm font-semibold text-ink' }, p.label), group);
  }

  /* ---------- Steps ---------- */
  function Steps(p) {
    var current = p.current || 0;
    return h('ol', { className: cx('flex flex-wrap gap-x-10 gap-y-2', p.className), 'aria-label': p['aria-label'] || 'Kroky' },
      (p.steps || []).map(function (s, i) {
        var state = i < current ? 'border-transparent text-ink' : i === current ? 'border-primary text-primary' : 'border-transparent text-ink-muted';
        return h('li', { key: i, 'aria-current': i === current ? 'step' : undefined, className: cx('flex gap-1.5 border-b-2 pb-2 font-display text-lg font-semibold', state) },
          h('span', null, (i + 1) + '.'), h('span', null, s));
      }));
  }

  /* ---------- Progress ---------- */
  var BAR = { primary: 'bg-primary', success: 'bg-success', warning: 'bg-warning', danger: 'bg-danger' };
  function Progress(p) {
    var max = p.max || 1;
    var v = Math.max(0, Math.min(max, p.value || 0));
    var label = p.label !== undefined ? p.label : 'Krok ' + v + ' z ' + max;
    return h('div', { className: cx('flex flex-col gap-3', p.className) },
      label ? h('span', { className: 'text-sm text-ink-muted' }, label) : null,
      h('div', {
        role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': v,
        'aria-label': typeof label === 'string' && label ? label : p['aria-label'],
        className: 'h-1 overflow-hidden rounded-full bg-line'
      }, h('div', { className: cx('h-full rounded-full transition-[width] duration-300', BAR[p.tone || 'primary']), style: { width: (v / max * 100) + '%' } })));
  }

  /* ---------- Card ---------- */
  function Card(p) {
    var sunken = p.tone === 'sunken';
    var rest = omit(p, ['title', 'description', 'actions', 'collapsed', 'tone', 'className', 'children']);
    var head = (p.title || p.actions) ? h('header', { className: 'flex items-start justify-between gap-4' },
      h('div', { className: 'flex min-w-0 flex-col gap-1' },
        p.title ? h(sunken ? 'h3' : 'h2', { className: sunken ? 'text-base font-semibold text-ink' : 'font-display text-xl font-semibold text-ink' }, p.title) : null,
        p.description ? h('p', { className: 'text-sm text-ink-muted' }, p.description) : null),
      p.actions || null) : null;
    var body = !p.collapsed && p.children ? h('div', { className: cx('flex flex-col', sunken ? 'gap-4' : 'gap-6', head && (sunken ? 'mt-4' : 'mt-6')) }, p.children) : null;
    return h('section', Object.assign({}, rest, {
      className: cx(sunken ? 'rounded-3xl bg-surface-sunken px-8 py-6' : 'rounded-2xl bg-surface px-10 shadow-md', !sunken && (p.collapsed ? 'py-6' : 'py-8'), p.className)
    }), head, body);
  }

  /* ---------- SummaryList ---------- */
  function SummaryList(p) {
    var t = p.total;
    return h('div', { className: cx('flex flex-col', p.className) },
      h('dl', { className: 'flex flex-col gap-5' }, (p.items || []).map(function (it, i) {
        return h('div', { key: i, className: 'flex items-baseline justify-between gap-4 text-base' },
          h('dt', { className: 'text-ink-muted' }, it.label),
          h('dd', { className: cx('whitespace-nowrap tabular-nums', it.tone === 'discount' ? 'text-success' : 'text-ink') }, it.value));
      })),
      t ? h('div', { className: 'mt-6 border-t border-line pt-6' },
        h('div', { className: 'flex items-baseline justify-between gap-4 font-display text-lg font-semibold text-ink' },
          h('span', null, t.label), h('strong', { className: 'whitespace-nowrap font-semibold tabular-nums' }, t.value)),
        t.note ? h('p', { className: 'mt-1 text-sm text-ink-muted' }, t.note) : null) : null);
  }

  /* ---------- Badge ---------- */
  var BADGE = {
    neutral: 'bg-surface-sunken text-ink-muted', primary: 'bg-primary-soft text-primary', success: 'bg-success-soft text-success',
    warning: 'bg-warning-soft text-warning', danger: 'bg-danger-soft text-danger'
  };
  function Badge(p) {
    return h('span', { className: cx('inline-flex h-6 items-center gap-1 whitespace-nowrap rounded-full px-2.5 text-xs font-semibold tracking-wide', BADGE[p.tone || 'neutral'], p.className) },
      p.icon || null, p.children);
  }

  window.Breeze = Object.assign(window.Breeze || {}, {
    Button: Button, TextField: TextField, Textarea: Textarea, Select: Select, Checkbox: Checkbox, Switch: Switch,
    RadioCard: RadioCard, Segmented: Segmented, Steps: Steps, Progress: Progress, Card: Card, SummaryList: SummaryList,
    Badge: Badge, installTailwindTheme: installTailwindTheme
  });
})();
