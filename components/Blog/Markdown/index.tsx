import * as Heading from './Heading';
import * as Text from './Text';

export default {
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    h6: Heading.H6,
    hr: Heading.HR,
    p: Text.P,
    a: Text.A,
    code: (props: any) => <p {...props} />,
    inlineCode: (props: any) => <p {...props} />,
};
