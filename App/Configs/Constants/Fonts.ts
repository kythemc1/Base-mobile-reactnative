const fontSize: Record<string, {fontSize: number; lineHeight: number}> = {};
const fontWeight: Record<
  string,
  {
    fontWeight:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900';
  }
> = {};

const fontFamily: Record<string, string> = {
    inter: 'LexendDeca',
};

fontSize.xs = {
    fontSize: 12,
    lineHeight: 16,
};

fontSize.sm = {
    fontSize: 14,
    lineHeight: 20,
};

fontSize.base = {
    fontSize: 16,
    lineHeight: 24,
};

fontSize.lg = {
    fontSize: 18,
    lineHeight: 28,
};

fontSize.xl = {
    fontSize: 20,
    lineHeight: 28,
};

fontSize.xxl = {
    fontSize: 24,
    lineHeight: 32,
};

fontSize.xxxl = {
    fontSize: 30,
    lineHeight: 36,
};

fontSize.xxxxl = {
    fontSize: 36,
    lineHeight: 40,
};

// fontWeight

fontWeight.thin = {
    fontWeight: '100',
};

fontWeight.extraLight = {
    fontWeight: '200',
};

fontWeight.light = {
    fontWeight: '300',
};
fontWeight.normal = {
    fontWeight: '400',
};
fontWeight.medium = {
    fontWeight: '500',
};

fontWeight.semiBold = {
    fontWeight: '600',
};

fontWeight.bold = {
    fontWeight: '700',
};

fontWeight.extraBold = {
    fontWeight: '800',
};

fontWeight.black = {
    fontWeight: '900',
};

export {fontSize, fontWeight, fontFamily};
