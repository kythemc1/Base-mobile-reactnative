export const Concept: {
  key: string | null;
  prefix: string | null;
  suffixTypes: string[];
  suffixes:
    | {
        value: string;
        suffix: string;
      }[]
    | null;
  fields: string[];
}[] = [
    {
        key: null,
        prefix: 'p-',
        fields: ['padding'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'px-',
        fields: ['paddingHorizontal'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'py-',
        fields: ['paddingVertical'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'pt-',
        fields: ['paddingTop'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'pr-',
        fields: ['paddingRight'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'pb-',
        fields: ['paddingBottom'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'pl-',
        fields: ['paddingLeft'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'm-',
        fields: ['margin'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'mx-',
        fields: ['marginHorizontal'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'my-',
        fields: ['marginVertical'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'mt-',
        fields: ['marginTop'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'mr-',
        fields: ['marginRight'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'mb-',
        fields: ['marginBottom'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'ml-',
        fields: ['marginLeft'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-',
        fields: ['borderRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-t-',
        fields: ['borderTopLeftRadius', 'borderTopRightRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-r-',
        fields: ['borderTopRightRadius', 'borderBottomRightRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-b-',
        fields: ['borderBottomRightRadius', 'borderBottomLeftRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-l-',
        fields: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-tl-',
        fields: ['borderTopLeftRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-tr-',
        fields: ['borderTopRightRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-br-',
        fields: ['borderBottomRightRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'rounded-bl-',
        fields: ['borderBottomLeftRadius'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'w-',
        fields: ['width'],
        suffixes: [
            {
                suffix: 'full',
                value: '100%',
            },
        ],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'h-',
        fields: ['height'],
        suffixes: [
            {
                suffix: 'full',
                value: '100%',
            },
        ],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'min-w-',
        fields: ['minWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'min-h-',
        fields: ['minHeight'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'max-w-',
        fields: ['maxWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'max-h-',
        fields: ['maxHeight'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-',
        fields: ['borderWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-t-',
        fields: ['borderTopWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-r-',
        fields: ['borderRightWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-b-',
        fields: ['borderBottomWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-l-',
        fields: ['borderLeftWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-x-',
        fields: ['borderLeftWidth', 'borderRightWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'border-y-',
        fields: ['borderTopWidth', 'borderBottomWidth'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },

    {
        key: null,
        prefix: 'border-',
        fields: ['borderColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'border-t-',
        fields: ['borderTopColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'border-r-',
        fields: ['borderRightColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'border-b-',
        fields: ['borderBottomColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'border-l-',
        fields: ['borderLeftColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'border-x-',
        fields: ['borderLeftColor', 'borderRightColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'border-y-',
        fields: ['borderTopColor', 'borderBottomColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        prefix: null,
        key: 'flex',
        fields: ['flex'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'grow',
        fields: ['flexGrow'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'shrink',
        fields: ['flexShrink'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border',
        fields: ['borderWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border-t',
        fields: ['borderTopWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border-r',
        fields: ['borderRightWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border-b',
        fields: ['borderBottomWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border-l',
        fields: ['borderLeftWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border-x',
        fields: ['borderLeftWidth', 'borderRightWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: null,
        key: 'border-y',
        fields: ['borderTopWidth', 'borderBottomWidth'],
        suffixes: [],
        suffixTypes: [],
    },
    {
        prefix: 'flex-',
        key: null,
        fields: ['flexDirection'],
        suffixes: [
            {
                suffix: 'row',
                value: 'row',
            },
            {
                suffix: 'col',
                value: 'column',
            },
            {
                suffix: 'row-reverse',
                value: 'row-reverse',
            },
            {
                suffix: 'col-reverse',
                value: 'column-reverse',
            },
        ],
        suffixTypes: ['string'],
    },
    {
        prefix: 'basis-',
        key: null,
        fields: ['flexBasis'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        prefix: 'grow-',
        key: null,
        fields: ['flexGrow'],
        suffixes: [],
        suffixTypes: ['number'],
    },
    {
        prefix: 'shrink-',
        key: null,
        fields: ['flexShrink'],
        suffixes: [],
        suffixTypes: ['number'],
    },
    {
        prefix: 'flex-',
        key: null,
        fields: ['flexWrap'],
        suffixes: [
            {
                suffix: 'nowrap',
                value: 'nowrap',
            },
            {
                suffix: 'wrap',
                value: 'wrap',
            },
            {
                suffix: 'wrap-reverse',
                value: 'wrap-reverse',
            },
        ],
        suffixTypes: ['string'],
    },
    {
        prefix: 'justify-',
        key: null,
        fields: ['justifyContent'],
        suffixes: [
            {
                value: 'flex-start',
                suffix: 'start',
            },
            {
                value: 'flex-end',
                suffix: 'end',
            },
            {
                value: 'center',
                suffix: 'center',
            },
            {
                value: 'space-between',
                suffix: 'between',
            },
            {
                value: 'space-around',
                suffix: 'around',
            },
            {
                value: 'space-evenly',
                suffix: 'evenly',
            },
        ],
        suffixTypes: ['string'],
    },
    {
        prefix: 'content-',
        key: null,
        fields: ['alignContent'],
        suffixes: [
            {
                value: 'center',
                suffix: 'center',
            },
            {
                value: 'flex-start',
                suffix: 'start',
            },
            {
                value: 'flex-end',
                suffix: 'end',
            },
            {
                value: 'space-between',
                suffix: 'between',
            },
            {
                value: 'space-around',
                suffix: 'around',
            },
            {
                value: 'stretch',
                suffix: 'stretch',
            },
        ],
        suffixTypes: ['string'],
    },
    {
        prefix: 'items-',
        key: null,
        fields: ['alignItems'],
        suffixes: [
            {
                value: 'flex-start',
                suffix: 'start',
            },
            {
                value: 'flex-end',
                suffix: 'end',
            },
            {
                value: 'center',
                suffix: 'center',
            },
            {
                value: 'baseline',
                suffix: 'baseline',
            },
            {
                value: 'stretch',
                suffix: 'stretch',
            },
        ],
        suffixTypes: ['string'],
    },
    {
        prefix: 'self-',
        key: null,
        fields: ['alignSelf'],
        suffixes: [
            {
                value: 'flex-start',
                suffix: 'start',
            },
            {
                value: 'flex-end',
                suffix: 'end',
            },
            {
                value: 'center',
                suffix: 'center',
            },
            {
                value: 'baseline',
                suffix: 'baseline',
            },
            {
                value: 'stretch',
                suffix: 'stretch',
            },
            {
                value: 'auto',
                suffix: 'auto',
            },
        ],
        suffixTypes: ['string'],
    },
    {
        key: null,
        prefix: 'bg-',
        fields: ['backgroundColor'],
        suffixes: [],
        suffixTypes: ['color'],
    },
    {
        key: null,
        prefix: 'inset-',
        fields: ['top', 'left', 'right', 'bottom'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'inset-x-',
        fields: ['left', 'right'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'inset-y-',
        fields: ['top', 'bottom'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'top-',
        fields: ['top'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'bottom-',
        fields: ['bottom'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'right-',
        fields: ['right'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'left-',
        fields: ['left'],
        suffixes: [],
        suffixTypes: ['number', 'string'],
    },
    {
        key: null,
        prefix: 'zIndex-',
        fields: ['zIndex'],
        suffixes: [],
        suffixTypes: ['number'],
    },
];
