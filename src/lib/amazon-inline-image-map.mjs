/**
 * Curated m.media-amazon.com/images/I/* URLs.
 * P/ASIN paths return a 43-byte tracking GIF — do not use for <img src>.
 * Regenerate: SPINE_SYNC_SITE=<slug> python scripts/sync_amazon_inline_image_map.py
 */
export const AMAZON_INLINE_IMAGE_BY_ASIN = {
  B0002JMDCW: 'https://m.media-amazon.com/images/I/41WJYTumRVL.jpg',
  B0007RVLOA: 'https://m.media-amazon.com/images/I/41BXhcCx4WL.jpg',
  B0009H50WW: 'https://m.media-amazon.com/images/I/51O-mWuDEHL.jpg',
  B000BO4R8Q: 'https://m.media-amazon.com/images/I/4111vVUAyHL.jpg',
  B001447VB2: 'https://m.media-amazon.com/images/I/410nT4OVq3L.jpg',
  B001THWFII: 'https://m.media-amazon.com/images/I/514E7emCxiL.jpg',
  B004XWQYRE: 'https://m.media-amazon.com/images/I/41sgw9Wo45L.jpg',
  B005U80HPK: 'https://m.media-amazon.com/images/I/31-FdRdsuYL.jpg',
  B007KPX7HQ: 'https://m.media-amazon.com/images/I/41wFTTwVrgL.jpg',
  B00FALVXCI: 'https://m.media-amazon.com/images/I/41BDvMydlVL.jpg',
  B00PZQHUF2: 'https://m.media-amazon.com/images/I/41cIBUTL-vL.jpg',
  B015GGY61Q: 'https://m.media-amazon.com/images/I/41YoNUfVOqL.jpg',
  B075T2NBH1: 'https://m.media-amazon.com/images/I/515uRXrDvHL.jpg',
  B07885QDVH: 'https://m.media-amazon.com/images/I/41KhuH4zngL.jpg',
  B0798Y68VX: 'https://m.media-amazon.com/images/I/313tVK9S7OL.jpg',
  B07C2YWBN7: 'https://m.media-amazon.com/images/I/41l0gESuZVL.jpg',
  B087QSGMZN: 'https://m.media-amazon.com/images/I/31+Tn-1gS9L.jpg',
  B08BJTRNRF: 'https://m.media-amazon.com/images/I/41tV3F45YYL.jpg',
  B092LMZQZ9: 'https://m.media-amazon.com/images/I/417fOa8FHFL.jpg',
  B093TJ5S2N: 'https://m.media-amazon.com/images/I/41gOZtjVguS.jpg',
  B09BCWY4GB: 'https://m.media-amazon.com/images/I/51JZRyKZ3QL.jpg',
  B0B6W2F8K6: 'https://m.media-amazon.com/images/I/410X5UjU8XL.jpg',
  B0BKNGLY5K: 'https://m.media-amazon.com/images/I/41W2n-ci8CL.jpg',
  B0BKNMN6M8: 'https://m.media-amazon.com/images/I/31ZiePQTqkL.jpg',
  B0BKNPXW6L: 'https://m.media-amazon.com/images/I/41YROhADQZL.jpg',
  B0BKYHCJN8: 'https://m.media-amazon.com/images/I/41teQdNgclL.jpg',
  B0BKYJCQJ3: 'https://m.media-amazon.com/images/I/41JxrO1QIJL.jpg',
  B0BXHS4KPR: 'https://m.media-amazon.com/images/I/4121CstKIwL.jpg',
  B0BXHTSTSN: 'https://m.media-amazon.com/images/I/41HkE-Io+ZL.jpg',
  B0C3RJ5TB7: 'https://m.media-amazon.com/images/I/51brvDP8L4L.jpg',
  B0C9MBFJMF: 'https://m.media-amazon.com/images/I/51FFoiIRB7L.jpg',
  B0CXHP2V6C: 'https://m.media-amazon.com/images/I/41mT2G0xOOL.jpg',
  B0D5NXPSD9: 'https://m.media-amazon.com/images/I/31rX9U1FnTL.jpg',
  B0DCJTS1VT: 'https://m.media-amazon.com/images/I/41rJVVyN6NL.jpg',
  B0DJKKZTMG: 'https://m.media-amazon.com/images/I/31TpwMa+mNL.jpg',
  B0DJKMZX89: 'https://m.media-amazon.com/images/I/31kciroSJCL.jpg',
  B0DNMKXFM6: 'https://m.media-amazon.com/images/I/31esxF8vZqL.jpg',
  B0DT4G61KV: 'https://m.media-amazon.com/images/I/41LpMWVAVUL.jpg',
  B0DV5579PT: 'https://m.media-amazon.com/images/I/41opUFkFLBL.jpg',
  B0DVRG6FT4: 'https://m.media-amazon.com/images/I/41rn4P8aXeL.jpg',
  B0FB4ZL2K9: 'https://m.media-amazon.com/images/I/41Zwu99dQIL.jpg',
  B0FQL6LDB6: 'https://m.media-amazon.com/images/I/51pOFe+9WJL.jpg',
  B0FQL7X88X: 'https://m.media-amazon.com/images/I/514sgcjZoFL.jpg',
  B0FQLLYPJS: 'https://m.media-amazon.com/images/I/51QFDuRwhkL.jpg',
  B0FSZZCC7M: 'https://m.media-amazon.com/images/I/51gVb3dUlvL.jpg',
  B0G54JYBLC: 'https://m.media-amazon.com/images/I/41srpRBlp6L.jpg',
  B0GVQ8JBBX: 'https://m.media-amazon.com/images/I/41EwR63mxsL.jpg',
  B0H11QMV66: 'https://m.media-amazon.com/images/I/41mcTspD+qL.jpg',
};

export function amazonInlineImageUrl(asin) {
  const id = String(asin || '').trim().toUpperCase();
  if (!id) return '';
  return (
    AMAZON_INLINE_IMAGE_BY_ASIN[id] ||
    `/images/amazon-picks/${id}.jpg`
  );
}

export function rewriteAmazonInlineImgSrc(src, href) {
  let asin = '';
  const fromSrc = String(src || '').match(/\/P\/([A-Z0-9]{10})\./i);
  if (fromSrc) asin = fromSrc[1];
  if (!asin && href) {
    const fromHref = String(href).match(/\/dp\/([A-Z0-9]{10})/i);
    if (fromHref) asin = fromHref[1];
  }
  if (!asin) return src;
  return amazonInlineImageUrl(asin);
}
