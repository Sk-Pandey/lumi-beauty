// All products/prices are MOCK demo data.
export const BRAND='LUMI BEAUTY';
export const fmt=n=>'₹'+Number(n).toLocaleString('en-IN');
export const CATS=[['lips','Lips','#D94F76'],['eyes','Eyes','#6B4A8E'],['face','Face','#E8A07A'],['tools','Tools','#3E8E85'],['combos','Combos','#B93760']];
const R=[
['velvet-matte-lipstick','Velvet Matte Lipstick','Lips','Lipstick',299,399,'Matte',4.8,124,'B',['#C77D85','#9F2449','#B5493B']],
['glass-shine-lip-gloss','Glass Shine Lip Gloss','Lips','Lip Gloss',249,0,'Gloss',4.6,88,'N',['#F3A6B4','#E27D8F']],
['define-lip-liner','Define Lip Liner','Lips','Lip Liner',179,229,'Matte',4.4,52,'',['#A8545E','#7A3040']],
['petal-lip-tint','Petal Lip Tint','Lips','Lip Tint',199,0,'Dewy',4.7,96,'B',['#E9667F','#D94F76']],
['creamy-lip-crayon','Creamy Lip Crayon','Lips','Lip Crayon',279,349,'Matte',4.5,61,'N',['#C4606E','#8F2F45','#D99A8E']],
['satin-finish-lipstick','Satin Finish Lipstick','Lips','Lipstick',329,0,'Dewy',4.3,40,'',['#D7757F','#B03A55']],
['smudge-proof-kajal','Smudge-Proof Kajal','Eyes','Kajal',149,199,'Matte',4.7,210,'B',['#1C1A1C']],
['precision-liquid-eyeliner','Precision Liquid Eyeliner','Eyes','Eyeliner',229,0,'Matte',4.5,77,'',['#1C1A1C','#3B2A5E']],
['lash-lift-mascara','Lash Lift Mascara','Eyes','Mascara',349,449,'Matte',4.6,133,'B',['#1C1A1C']],
['shimmer-eyeshadow-palette','Shimmer Eyeshadow Palette','Eyes','Eyeshadow',499,649,'Shimmer',4.8,150,'N',['#C9A27A','#8E6A9B','#D77F6A']],
['brow-define-pencil','Brow Define Pencil','Eyes','Eyebrow',159,0,'Matte',4.2,34,'',['#5A3E36','#3A2A26']],
['liquid-gold-eyeshadow','Liquid Gold Eyeshadow','Eyes','Eyeshadow',269,0,'Shimmer',4.4,29,'N',['#D8B26A','#C98A5B']],
['skin-blur-foundation','Skin Blur Foundation','Face','Foundation',449,549,'Matte',4.5,175,'B',['#F2CDB0','#E3B391','#C48B64','#8E5B3C']],
['full-cover-concealer','Full Cover Concealer','Face','Concealer',299,0,'Matte',4.6,99,'',['#F0D0B6','#DDAA88','#B07B58']],
['soft-flush-blush','Soft Flush Blush','Face','Blush',349,429,'Dewy',4.7,142,'B',['#F2A1A1','#E2788A','#D2735F']],
['moon-glow-highlighter','Moon Glow Highlighter','Face','Highlighter',329,0,'Shimmer',4.6,68,'N',['#F4DDB5','#E9C3A0']],
['silk-compact-powder','Silk Compact Powder','Face','Compact Powder',249,299,'Matte',4.3,81,'',['#EBC7A6','#D3A27C']],
['prime-time-primer','Prime Time Primer','Face','Primer',399,0,'Dewy',4.4,47,'N',['#F6E5DA']],
['flawless-brush-set','Flawless Brush Set','Tools','Makeup Brushes',599,799,'',4.7,64,'B',['#D94F76']],
['bounce-beauty-sponge','Bounce Beauty Sponge','Tools','Beauty Sponges',129,0,'',4.5,120,'',['#F6A5B5','#F8C9A8']],
['makeup-pouch-organiser','Makeup Pouch Organiser','Tools','Accessories',249,0,'',4.2,22,'N',['#B93760']],
['everyday-essentials-kit','Everyday Essentials Kit','Combos','Makeup Kit',899,1199,'Matte',4.8,58,'B',['#D94F76']],
['the-lip-edit','The Lip Edit','Combos','Lip Combo',599,799,'Gloss',4.7,73,'N',['#C77D85']],
['glow-getter-set','Glow Getter Set','Combos','Gift Set',999,1349,'Dewy',4.6,41,'N',['#E8A07A']],
['party-ready-kit','The Party Ready Kit','Combos','Gift Set',1199,1599,'Shimmer',4.9,36,'B',['#6B4A8E']]];
export const PRODUCTS=R.map(([slug,name,category,subcategory,price,o,finish,rating,reviewCount,f,cols],i)=>({
 id:'p'+String(i+1).padStart(3,'0'),slug,name,category,subcategory,price,originalPrice:o||null,finish,rating,reviewCount,
 isBestSeller:f==='B',isNew:f==='N',stock:25,order:i,
 description:`${name} - a sample ${subcategory.toLowerCase()} for your everyday makeup routine. Demo product.`,
 tags:[category.toLowerCase(),subcategory.toLowerCase(),finish.toLowerCase()],
 variants:cols.map((c,j)=>({id:'s'+(j+1),name:'Shade '+(j+1),color:c}))}));
export const disc=p=>p.originalPrice?Math.round(100-p.price/p.originalPrice*100):0;
