import { renderTag, renderTags } from './tags.js';
import { mdclean } from './utils.js';

function renderType(pr) {
  if (pr.type?.name === 'union') {
    return pr.type.elements.map(element => element.name).join(' | ');
  }
  return pr.type?.name ?? `-${pr.required ? ' (required)' : ''}`;
}

function tmpl(props) {
  return props.map((pr = { tags: {} }) => {
    const { values, default: defaults, defaultValue, ...restTags } = pr.tags || {};
    const valuesTag = values?.[0] ?? null;
    const defaultTag = defaults?.[0] ?? defaultValue?.[0] ?? null;

    const p = pr.name;
    const t = pr.description ?? `${restTags ? renderTags(restTags) : ''}`;
    const n = renderType(pr);
    const v = values ? renderTag(valuesTag, true) : (pr.values?.map(pv => `\`${pv}\``).join(', ') ?? '-');
    const d = defaultTag ? renderTag(defaultTag, true) : pr.defaultValue?.value ?? '';

    return `| ${mdclean(p)} | ${mdclean(t)} | ${mdclean(n)} | ${mdclean(v)} | ${mdclean(d)} |\n`;
  }).join('');
}

export default (props, opt = {}) => `
${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}## Props
  | Prop name     | Description | Type      | Values      | Default     |
  | ------------- | ----------- | --------- | ----------- | ----------- |
  ${tmpl(props)}
`;
