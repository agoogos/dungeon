 i m p o r t   {   I n j e c t a b l e   }   f r o m   " @ a n g u l a r / c o r e " ; 
 i m p o r t   {   H t t p ,   R e q u e s t ,   R e q u e s t M e t h o d   }   f r o m   " @ a n g u l a r / h t t p " ; 
 i m p o r t   {   O b s e r v a b l e   }   f r o m   " r x j s / O b s e r v a b l e " ; 
 i m p o r t   {   P r o d u c t   }   f r o m   " . / p r o d u c t . m o d e l " ; 
 i m p o r t   {   C a r t   }   f r o m   " . / c a r t . m o d e l " ; 
 i m p o r t   {   O r d e r   }   f r o m   " . / o r d e r . m o d e l " ; 
 i m p o r t   " r x j s / a d d / o p e r a t o r / m a p " ; 
 c o n s t   P R O T O C O L   =   " h t t p " ; 
 c o n s t   P O R T   =   3 5 0 0 ; 
 @ I n j e c t a b l e ( ) 
 e x p o r t   c l a s s   R e s t D a t a S o u r c e   { 
 b a s e U r l :   s t r i n g ; 
 c o n s t r u c t o r ( p r i v a t e   h t t p :   H t t p )   { 
 t h i s . b a s e U r l   =   ` $ { P R O T O C O L } : / / $ { l o c a t i o n . h o s t n a m e } : $ { P O R T } / ` ; 
 } 
 g e t P r o d u c t s ( ) :   O b s e r v a b l e < P r o d u c t [ ] >   { 
 r e t u r n   t h i s . s e n d R e q u e s t ( R e q u e s t M e t h o d . G e t ,   " p r o d u c t s " ) ; 
 } 
 s a v e O r d e r ( o r d e r :   O r d e r ) :   O b s e r v a b l e < O r d e r >   { 
 r e t u r n   t h i s . s e n d R e q u e s t ( R e q u e s t M e t h o d . P o s t ,   " o r d e r s " ,   o r d e r ) ; 
 } 
 p r i v a t e   s e n d R e q u e s t ( v e r b :   R e q u e s t M e t h o d , 
 u r l :   s t r i n g ,   b o d y ? :   P r o d u c t   |   O r d e r ) :   O b s e r v a b l e < P r o d u c t   |   O r d e r >   { 
 r e t u r n   t h i s . h t t p . r e q u e s t ( n e w   R e q u e s t ( { 
 m e t h o d :   v e r b , 
 u r l :   t h i s . b a s e U r l   +   u r l , 
 b o d y :   b o d y 
 } ) ) . m a p ( r e s p o n s e   = >   r e s p o n s e . j s o n ( ) ) ; 
 } 
 }