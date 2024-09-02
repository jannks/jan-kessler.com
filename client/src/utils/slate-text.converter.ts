import escapeHTML from 'escape-html';
import { Text, type BaseText } from 'slate';

type CustomText = BaseText & {
    bold?: boolean;
    code?: boolean;
    italic?: boolean;
};

export const serialize = (children: any[]): string =>
    children
        .map((node) => {
            if (Text.isText(node)) {
                let text = escapeHTML(node.text);

                const customNode = node as CustomText;

                if (customNode.bold) {
                    text = `<strong>${text}</strong>`;
                }

                if (customNode.code) {
                    text = `<code>${text}</code>`;
                }

                if (customNode.italic) {
                    text = `<em>${text}</em>`;
                }

                if (node.text === '') {
                    text = '<br>';
                }

                // Handle other leaf types here...

                return text;
            }

            if (!node) {
                return '';
            }

            const childrenHtml = serialize(node.children);

            switch (node.type) {
                case 'h1':
                    return `<h1>${childrenHtml}</h1>`;
                case 'h2':
                    return `<h2>${childrenHtml}</h2>`;
                case 'h3':
                    return `<h3>${childrenHtml}</h3>`;
                case 'h4':
                    return `<h4>${childrenHtml}</h4>`;
                case 'h5':
                    return `<h5>${childrenHtml}</h5>`;
                case 'h6':
                    return `<h6>${childrenHtml}</h6>`;
                case 'blockquote':
                    return `<blockquote>${childrenHtml}</blockquote>`;
                case 'ul':
                    return `<ul>${childrenHtml}</ul>`;
                case 'ol':
                    return `<ol>${childrenHtml}</ol>`;
                case 'li':
                    return `<li>${childrenHtml}</li>`;
                case 'link':
                    return `<a href="${escapeHTML(
                        node.url,
                    )}">${childrenHtml}</a>`;
                default:
                    return `<p>${childrenHtml}</p>`;
            }
        })
        .join('');
