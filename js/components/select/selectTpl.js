export const tpl = ( select ) => {
  return `
    <label>${select.label}</label>
    <span>
      <select class="${select.className}">
        ${select.languages.map( lang => `<option value="${lang.value}" data-dir="${lang.dir}">${lang.name}</option>`).join('')}
      </select>
    </span>
  `;
};