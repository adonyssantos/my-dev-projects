export const Link = link =>
  `<a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a>`;

export const Template = ({
  title = '',
  description = '',
  repositoryUrl = '',
  liveDemoUrl = '',
  technologiesUsed = '',
  disable = false,
}) =>
  !disable &&
  `
	<h3>${title}</h3>
	<p>${description}</p>
	
	${technologiesUsed && `<p><span>Technologies:</span> ${technologiesUsed}</p>`}
	${repositoryUrl && `<p><span>Project repo:</span> ${Link(repositoryUrl)}</p>`}
  ${liveDemoUrl && `<p><span>Live demo:</span> ${Link(liveDemoUrl)}</p>`}
	<hr />
  `;
export default Template;
