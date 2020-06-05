import { ReactNode } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import oneDarkPro from './theme';

type Props = { children: string; className?: string };
export function Block({ children, className }: Props) {
    const lang = className ? className.replace('language-', '') : 'ts';

    //Not really sure on the particulars for most of this, but hey, it works
    return (
        <Highlight
            {...defaultProps}
            code={children.trim()}
            language={lang as Language}
            theme={oneDarkPro}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}

export function Inline({ children }: Props) {
    return <span>{children}</span>;
}
