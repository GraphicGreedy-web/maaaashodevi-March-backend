import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all'); 

  const galleryImages = [
    {
      id: 1,
      src: 'https://media-hosting.imagekit.io/49f5b9e968474d87/IMG_20250321_185026(1).jpg?Expires=1838189541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JUrnlgPMTkSLtcsLplIb-G8CKFJ-srr1lzovwz-NWpXqsPlRxj0oO35RTGJ4ZqPTqH12tilALa5rWndEiNJHKssJoYxiKvJoRjSl27NzwR4fVz0j0Va7gNTVwn2ts3DCkfhJssNeKdDvZZcQds6p86Enf1bf~yyFZgxOHjlbK4KK-04CYMc3qbZvbMag6GhtvkpsFeDs4obuOIQ0Uh14NHsM8uXu6vXcX42pXFlBY~Wb8ftUeeDMnj4dlDUIUzWb6OIk0ND1IsaC96-2vOXFAnry4sSYdai6sDj8qDEdoWN-hTCkbT~XaYcxSGQ0BgA1n3DYRjmWm6tUGv9VWulE2w__',
      alt: "Neem Karoli Baba Ashram Kainchi Dham",
      category: 'Kainchi Dham',
      title: 'Standing outside Neem Karoli Baba Ashram,Kainchi Dham.'
    },
    {
      id: 2,
      src: 'https://media-hosting.imagekit.io/8c355e21989c4d07/IMG_20250321_185322(1).jpg?Expires=1838189541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KlGyf1JxXeI2C6Mb-nKUQt3x6lKFJathD3FsXf3mFGrPY31sWUM9Y09pQPLYgv5~veFMHy-EX52seruApImd8CuK3f25lcJW2NX19gu30~PtciCLFb1OsrFw793wYI8GEjKsa2z-nvI9S73ZkFzhPnLJExp1OAKJnFgot1IEMVwilk4nb5lr0fEbe~KaMaN0Hxl4XS5LEZ-ogxGAfZOWuc8-7aWHvEzyFrvrCnLV2VS56hQ-aGVm1xR4Eyeo6XNXZflcJ3LzjTtU8gvrs1nMgQ3Dueown26WjjqgRns9jcRRBlzT3UYfl-PA9HI6DK6r1ARYPfoloPtU06P--Ib1hg__',
      alt: "Neem Karoli Baba Ashram Kainchi Dham",
      category: 'Kainchi Dham',
      title: 'Standing outside Neem Karoli Baba Ashram,Kainchi Dham.'
    },
    {
      id: 3,
      src: 'https://media-hosting.imagekit.io/1798579d9dab4ca9/IMG_20250321_102357.jpg?Expires=1838189541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Mb1B6k7aN06T3pnNyJ1CrfYmrXP7C9e1NEgcG3HmL1Srp5xt4FnW7s1aQMQMWg2PB0-hXARzcZ9cIGwQxgKJ-3Cx4yvSeOFmPqjYh0Z48x1Hy~~y9yUTc9o4zhfBDiMQ6eFKpAxvmnxsIjAhAMp2sBIoIpiFedbUh~xM3RF~8EseEneOTb1DJkfjDC78OE9jle1O9M75NTeudZtpdxL1qbEDPJ~-onEqigv9wJVpxPu2tPKWAOVlEr457MQciIJWBtM122JyL~~jC7ODZAq35Kh36FvgrvcuDVRF5Dk4ykaHSyBD5PRYhJQ3c42qRrebngwqfIRQgUlIbmHaF3WYzQ__',
      alt: "Neem Karoli Baba Ashram Kainchi Dham",
      category: 'Kainchi Dham',
    },
    {
      id: 4,
      src: 'https://media-hosting.imagekit.io/fbf8312715c04574/IMG_20250321_104617.jpg?Expires=1838189541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CT56wyRXtkv~JzHn-WIxQm3a21RqgBwmOVCx1Mdepi6UvRgBeBIMDkPr1-24Rr0h2RZ1gSZgjo-YDKe797gt7Dbh5hJUO-9ZKvrsc2t7d12~27KVlh66o6ryD609JKF~Oc76p3j5ZOSv9rSP9VcWkdK2K6gXFbAAo8r2oHSi4CWFWfEvKxhfDO9JMYeI~h-sGASqH7f5u3bo3fF22hxv2DClqxcUfSh7sWWLThE3sF3p4GfBmYmoyBP7uJqQTzh7-rGoKJr4x5sPItFOeaY9~CHpf6vRRkKtNvPWuvUhkV1Cv7LUKELA559~Kg4x7~rk7LeBjG-2fboSQbTuTizoGg__',
      alt: 'Neem Karoli Baba Ashram Kainchi Dham',
      category: 'Kainchi Dham',
    },
    {
      id: 5,
      src: 'https://media-hosting.imagekit.io/866c44ea05c140d6/IMG_20250321_082405.jpg?Expires=1838189541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=T-LyGStkNNqN5DIcc5yfezvlxX3~PaeEVjwxcXWVKPrztbExiVXehTq2Nk66qONRB80m70Jx2U7MKQGqO4otH6Y5ExasdJ7MPMpx6TcubfGZWhhrlzfBn9nB8Kd02KOfVH8k8q~3-NiSpQekiIDbETGS3eca1jw9BohhHQ-IKHu9b5eU5Eq2NqXcLL1Hk2Lw-6--vslU8LPafS3K~Do1NClV-vaXNJJdBzkKnF-ZXHfKzghKgpWB6Y61xtSyrjwFjuuUuduRfJ-Sq1rnzFc1bF4F5Tp49kOnyROtP6gYX-7onovv5u8b7L75~jciPpg7Go4DoVMRu67HbbuQRTw4XQ__',
      alt: 'Neem Karoli Baba Ashram Kainchi Dham',
      category: 'Kainchi Dham',
    },
    {
      id: 6,
      src: 'https://media-hosting.imagekit.io/d4a693f297684410/IMG_20250321_080022.jpg?Expires=1838189541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qZ6lk2SShK0-ecdxWPvL-Mg~4975aGmKt1EOXQyQmOlowcutIh37TXFY~9BJx8ZxFIinoGEnDc7Lw~0zC4ZSMhDyCHn3TpAkdjLst1XbBCo~HUIfutSdBxwqjbKclgzu7YuS65JPSIOo-dTNxsnK7v0H7p3c2T0rOfVsLC9fqOIvZZcpRsoi4ZyAa8dBS1ALtp5OouhVh2IjyhbvkMZe-Ae6x4DdWxXMuGT1SgwMCfUQbw8lt7dCADhFMwMSnAtAnFTPPQ5mJUhiqoAd9bbO9nk7X~ejsJgWcualZP6zl~5AikxcSxxPgKxVp0MyBodfxjYPb790GfPBXQmITWv17A__',
      alt: 'Neem Karoli Baba Ashram Kainchi Dham',
      category: 'Kainchi Dham1',
    },
    {
      id: 7,
      src: 'https://media-hosting.imagekit.io/c1c5ac7dce874666/IMG_20250322_091822.jpg?Expires=1838277086&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vCG7ChREEQ-Kpkki4jCkmsYvDojfkY1KVbsyQ6qU4~4AVyP3gIStyecQMIQdmvb2zPJP7GzB0pYcO5lnMpLz24PIzfLxy3Yq5OBzv~n0lXH8Cqxpm13JXxbb7l27zzjQezok8GFyK7AwdDwSJFhdSZW8JLmZ-tChyTYZXnaMV-1PDernZtOvtUdgvVgM9VGEL2dwqdNmrGk3qvIFrjAAIOWe~us5yBCBQq6fc1JHByU1yiPTpdEXcwgeiXzY1O-Gzx-MvtTGMZLTu4Yzn849CH51jVyrf3-oceDLtZ3MGTEf1dS8XfQXeInSRV-k3L8bqSmLb8CcJ37iMa0NfYVLxw__',
      alt: 'Sankat Mochan Mandir,Hanuman Garhi',
      category: 'Nainital',
    },
    {
      id: 8,
      src: 'https://media-hosting.imagekit.io/4e95e0cefb704f4f/IMG_20250322_113239(1).jpg?Expires=1838277087&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RLxCXzlEfSNSSZvu9CJBEvGns9DsSlCZOqcw95zEVd6hFQRfGJQT~n8nMIr3HqWSm0fB1t4ZweADdFcGqZy85yKiZPG9pvDgIQxuUReqXOo7KjMwR4myj72PrsACX-tnew92ct0-KwNt3t8SIFpvmw376jiX3XSMwI49SRrqo2qP4C65rvl8sZ67excL54dXNM6IT2kHsktF7wWAL2wWlwNyMw4MwWTkuvBwJ1C4LTLOUFWvmcdRiZilekhFlicZWHDGe5xkeKvixGkm8izucftzttXcRCYWIcK82mU0x0hJptu9LGNfLvu1VXs~0NLxiW4V6~aaq2yUIVf1splFcg__',
      alt: 'Woodland water fall nainital',
      category: 'Nainital',
    },
    {
      id: 9,
      src: 'https://media-hosting.imagekit.io/7272b3ca0156439e/IMG_20250322_112431.jpg?Expires=1838277086&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=O~-ICinjaS26spTNMFcZBw4suoaCIPqF~1UnmKfUPTylGfzUYh6VCTkSKB55zMCkq~4NKX~OJsOIEvcY5ENkFWu2HxtWmLdyGk4nCw5iPOH06eQDbJOYs0O9bbWf2vuS-8p31XD60aQE5mtX6gREAzfdJvO0sE5kOYj1pBRoiY5M0-5S38epYJnrNqdejsX3qQBiuAO6y0qT5N1FEhccHaIOzFPAxyUDwvf506Wx2jHO3UTniBjcuwt~S2kn7DPywT0oYZKPamGifURglUoaqJMKemrSCCzhXMh6TGi7J6QYWFskJGjRwaT-t5UqCbyTH4HfsTXCAzyKqwsi2ykB0w__',
      alt: 'Woodland water fall nainital',
      category: 'Nainital',
    },
    {
      id: 10,
      src: 'https://media-hosting.imagekit.io/d798c7ac01494e9c/IMG_20250322_113149.jpg?Expires=1838277086&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xszZOpYDPGXw1uSw390PjLdGKjWZxgkcjeYLNwr341Aj3GX9XdGrW6D~6cbFOrAKFMidDHgttp-qAQ0HG9K7JZF~tB08zjbbjjAznDqUcmHot1HbiFIVjHeejtvtLU3d7DzlkMyEoUAeoH2iy~cFcdbvW-MNsytqlGFBBvVJ1npBD1oyad9-4~DT7pYUNvHQ9Ue3W8BVJyhu0I84GuzTGFZVeT3YsZZ0-JAX9eTvfvRg4NuTz6-81toaqYNnKC9ZO8RR6psmC-nfC3-8tBmwBCC21JldAk5dkfQBA6dHo-084pm7bnHvVsOShVhN3DOdTN3CAle7izMOqdrxyprNqw__',
      alt: 'Woodland water fall nainital',
      category: 'Nainital',
    },
    {
      id: 11,
      src: 'https://media-hosting.imagekit.io/a869be1ac63a400a/IMG_20250322_113230(1).jpg?Expires=1838277086&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LPnfYSOMFwaCZbfXlplliXrFTfXJNYNx1o4MC8GDrxNf8i~Bp--IX3lsMTU-Q4YBy5ZtC58L-OYS4lx6obGu6AdObxUIM0m3wJHh~9SnaZtpHMs8h5BN7sFHrPxkycCzq1i80w2~f17aSm88mOIaPdxK4Tv7StUT0z8I82fMzYFPO45V1FUJShWsjOw~~DhJK-HTfgfAXsIkUFzqn7mT9~Pkx4Bx6~i-mx5T7GZ1bxntVxhqwE8Uhy7aVqHMOLNCVmFR5P8qFU4xtu2meszgOvmDd11MVQj4G08eFdYcC-uYNi-oTRj~ljhJct58A17EXi6bLPr8AF3M7RogoMNjeQ__',
      alt: 'Woodland water fall nainital',
      category: 'Nainital',
    },
    {
      id: 12,
      src: 'https://media-hosting.imagekit.io/bc8ab2b1506e4532/IMG_20250322_120131.jpg?Expires=1838277087&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=q92IH9nOuz4qsnCqyhhDQjZF3a9baD5GQ-psrLGnvqEeTZHNC2K4ZME75bsVBuvlNZdXHEDeMv1qNWNjnp1ctsiuwhd14NXQ0YBPjSaVdn-IGXxQmxvt9wA0HcAqIPQL5hcutFgwZywNe9BFhi~7ryTlli5RzECBA0bvwnzJaIsel8TgEyGoBMnKcThBqHVeW2n9GLueXMb4VdGfx22sLOF6ngs0gqSBNEF~43ZZy8vRxXJHNGMxhXgo0VtmBqHjv~1~J4OIcgbs7d2Hlv1WVGb~WBJBjFNyCo7-P74KmVIgZV16qfdnr2647R4hZiwGU9SiuQBY33ttuXqv5vtUlQ__',
      alt: 'Woodland water fall nainital',
      category: 'Nainital',
    },
    {
      id: 13,
      src: 'https://media-hosting.imagekit.io/04f62374ad554263/IMG_20250322_123715(1).jpg?Expires=1838277087&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0tq13OHmKz~S3Hr3SvMC7kyFHgrtidhVxWqVCpL~qmnAim53CMbpidLHySf4wwTXYTaG6TiqiKaof1wrPo5DXRygoxEaIHh7Uu9BY7EW6t02WCsi6kTu-g0aBRHXx1Wnt~ZBZJDwa360qxK647qscHJUqZAfp9PVU7aJXIqgc1r0QqgNQMe6RIZsAHr-BBiCeSonDatO3NlIZnJCYaaaPRsHQDlaaqYjlSLbL5FcU1PmNS687cdKEWDO7bG3VN1z2jVzKE8e~m9n6zC4GeL2OYphZA~99I7JNe0lJ3cuh-4KoKe8JH6eD7x3dE65UP5w45HHmq~1rLUVQZCmgkZaIQ__',
      alt: 'Woodland water fall nainital',
      category: 'Nainital',
    },
    {
      id: 14,
      src: 'https://media-hosting.imagekit.io/7192ffb216274ce8/IMG_20250322_124040(1).jpg?Expires=1838277087&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=IlIUaQsfYfwlElv43ln6vnZHGm6RMs0dmSa8lxGhUIryPCqp3fAf~9t9~BKg6Oj6Pz0ZifLRRYM0yXSJmjBZBE4NQQ4QEV33zUg97p1gtrdd1BB08rGJ6u3t8vfm9De7deEgHWGd~-e6aNtLGMbC9RpNqnY49dwfXsUHo5poN6hulTkAWE-C0Cm7SDyDGtbprd-a9-t3DioEzwBC-3iMPtB2KDXkaZ8hDCUaQFyALSVOVRlC97PtlpLKujkFJkbab3A53DhJwlsMowrPBv~Z2dbPMXDzoDNEv3z95XJd4DMbX5wOfTEBZkV1vmB0l0jo-diOiQZ42k22PYhGP-5heQ__',
      alt: 'Neem Karoli Baba Ashram Kainchi Dham',
      category: 'Nainital',
    },
    {
      id: 15,
      src: 'https://media-hosting.imagekit.io//7338c4de5f124731/IMG-20250306-WA0013.jpg?Expires=1835977601&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zQbEmYYhFDmZ4AjDDH4uiboN8v9ssQYcgE3VlKsmjGDqpKVk46qHh1Xlly9T3VWawkKGVRyASSogdST4dMV9mRJGOjlTL836UHasF5UkMlcUERoIPaBtteSaFNFs554Y5fTfkwwW6ukvMYYStyT~vByapJRkgQs7QypkTrZFwCmKxBBz76dbRKKIMbUOfOZ-5PXcJ7GjDEiDma6Ib03JZTsuX1xf2gyCKsTGRmbnfuMYpGlBJojlbIdzAiPBaiU21KPVIa9bXas0i9tuxzj1w~JBSx0UUuAfUdQNCmhSwgrsTiJVJzEeTgkIwcbmZiFfdYfgMIJnuHKek~~tSiq40w__',
      alt: 'Mahakumbh 2025',
      category: 'Maha-Kumah',
    },
    {
      id: 16,
      src: 'https://media-hosting.imagekit.io//b6475c9679324e80/IMG-20250306-WA0015.jpg?Expires=1835977601&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AUhMdXhJuS06WW9Oy5z4q0FZzzjMhllQMQMk9A5k3LnjrDUNpIKOJsbtlsAgQYUXHfXi5J1hDke~nLFAVOTFnTS~Oy2OhjLmqjN-mnUVOiNlWqqPEUB0KhNt1TmtEVZ4gYlJdPDym5xI9yiHJWRTB9M5~HM1UULH1l8Qr3ziDno70tzAayMJUAAIPoj2l5Sj48d2wmEmWaW2IRRT6cq01PyuKz0d1-ZZwJfHwpdv6wqnlg1zWl4clInQ3t3jVEZIa3Zj5IcughALZ6J1oOKK1HsqTTczguEKGHqbyM-YRpFGTHYbd1GHAj5ZmFS8ehKmn-BewZw95xrdssc6QxsUUA__',
      alt: 'Mahakumbh 2025',
      category: 'Maha-Kumah',
    },
    {
      id: 17,
      src: 'https://media-hosting.imagekit.io//a7408cdd54824c0b/IMG-20250306-WA0014.jpg?Expires=1835977601&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=E2YKuLc-ZRxxYs46lwe0pm2ETKaAoV3AVWftDB58xMbCq6oBnYl~BO2-hKQKwk6lssNhlPVrKTIFuvPUsbspHJCOJAxKj2USo-NiG5pNUpqXeIZFx6WD4UP3m43uugqFirYfQqSwAOGgk7BjSX2GkkzArhgE~iSpcjAbXIUFaG8ERY3RPrzXkLutPUPIsdxpWZo16cp0yibkkHczvYvSgPsANcQtg1qSP~LqMQJRJbmXThJq7HV0CA7tkXlPpZYKQ-RfIBS~AVDgUeHSLVPkWoEjQHxb2NLGwP1B68WyQ91dfkWduNCwsPhFTpPyjSQqEt4KURJptea87eHjqhG6dg__',
      alt: 'Kashi Vishwanath,Varanasi',
      category: 'Maha-Kumah',
    },
    {
      id: 18,
      src: 'https://media-hosting.imagekit.io//1bc79a4cc40a4ec3/IMG-20250306-WA0033.jpg?Expires=1835970401&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fhpvS1ovC5JnDLYYxTaaEB2aUGhvI7~y-hCs1R~C1cz3DOlLAWXeshxqzs2HuQZnQs0aZrblYqX2CbIcBJdGWbKhL1lvIC1F~yVlaMBJm1qSvAg7MDqNZ6E9jXVEqgFUUWu7ihdEw1Fl6HQ8DXpRV4dHdakbfHSq~SPiGzKX6peQxQdLXFFzVJy0yMD5Gol13WrZmvuUs~ezJyFmNq0q5A9mIWimQ9sD9wHItrFUQMopQKZDg2dfH4bLiyVNddnD7~cIm8lNxFpbJm53xTvu12MoDv0ovtaznvxVBBJxE2-AOrjBERB2Ii~SnLiFDfcOeyM8kkuCy10g3uknbtXXpA__',
      alt: "Gautam Buddha's Birth Place,Lubini",
      category: 'Nepal',
      title: 'Standing Near Gautam Buddha Birth Place'
    },
    {
      id: 19,
      src: 'https://media-hosting.imagekit.io//215db25e0e994790/IMG-20250306-WA0032.jpg?Expires=1835970401&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1sE71foLlCpdbLXBtq8t0MtLj7c9jp41TFCOB6W-sEY0PfLhHsTY4xd6C-~2a~nZmcqxVvtH-aKnbhi7KhTHNq5qWax38ybCorVqdBz6wuDYlQR2ewVagBco4LFw62wjNqXr~sR--6u4bMBc-E3G2~57m8BtQGaiu60yEI10~aiiava8xs8xQHYQjpGX2Jn-uqtdiX5oDcMC52ad4SBXA-N~0INCsdMPZ2hXqKIslwphcRzkUjhlCWA~SCtJenPGOTlk8-q1LmJEhrtaHWyif4rbqZ92UwIVw4oSsJFFzzP4ubQc4gL0MSTulqO3rEOD4ASciyxKfvevtXgV4xKt3A__',
      alt: 'Gorakhpur',
      category: 'Nepal',
      title: 'Starting of a tip'
    },
    {
      id: 20,
      src: 'https://media-hosting.imagekit.io//7f4780171aaf4f15/IMG-20250306-WA0029.jpg?Expires=1835970401&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HVan9~uQ3Ry~uc5-Z8-yFoTW1xxCW0RDfIfxDXIikAXlzxnLPoKe2BVaaynE~1n5QGSFAyRlfio~nuRJpU3uSSD4M0IcWhq0pWb3eMy-nhnEFndQDUpjOQgyaJ2HGBjttX1y-hWtPwFQvToPAd7wiLXThPg6VVXdyZGx~imU4WjjgjX8GEj6OBIYr6jTY1P2O~WjGLYnros4iWG9s5LUJRgLmdZ~y5GHitNQpe~60cvv0pJlIybigHJBYx6toD5-WP9fi4t13fRj3vFpZ2qiyl3ZdGZ-XAmm2IyNJmIce6u4EVtS2Vui9~poCrOd1D4Hdcrmv9ieM6KLjj5NevkNEg__',
      alt: 'Pokhara',
      category: 'Nepal',
      title: 'Pokhara'
    },
    {
      id: 21,
      src: 'https://media-hosting.imagekit.io//ce390390fdab4d1f/IMG-20250306-WA0027.jpg?Expires=1835970401&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BlmM4EivgiaWqcBWPvBCa3AnY6tI4xsmnzQOAee1brH9O8FDUgdy6o-sUUa~0P14aR6BbzDvXxNJzON5AArjUe~ycFxivL36kN~KCe~0yQBK~Y4DALkrpsKHK6zdYJv2SU1feJMKsuUlWDRnW26fIvJrUospj2V9Tq01saB2wulyhoBzfDV1JHDE6V66NZelQi9apG~6you8w3g3HLqVoKvb4nLnHih8RMsgRFnEPUm3lMaXfeLKeRjZP8fTSwvwrXeHw~25Uk-C5prFFDPg7akvZUAHtzelEm8xT26Jk0uALYqyvOn5TFI9K86PIIK6ETZl9qFqR5TSrZOxo5KObg__',
      alt: 'Gorakhnath temple',
      category: 'Nepal',
      title: 'At Gorakhnath temple'
    },
    {
      id: 22,
      src: 'https://media-hosting.imagekit.io//660d76b9f7bb4aa6/IMG-20250306-WA0024.jpg?Expires=1835970401&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=it-yBml8vfvzYFZb871OU027xNQTQRlNmFZwnADIRo0etkizLlZ-0e907N1~S6FpOj71KL4fGUNpzANSuWopvWviy6acCSXs0~4y8UCxcggDnBvVMmy~GRZX5CWG4IbOwWsPNmNnrLcwdbEMrFyAlj7o3PfXTv2~55Ttq-MF3RyeyJpBiC9sTsiNMlUVrs58L7vOYycrfwwozsYAJa7QV1gOcqHeGZyz1zuHcr0f98-xxbVjpZkliwX0jmq~4Hn32xwt-xocYWp0cNYAkIChG9ljsS4Zb8z~c2q85SHZrjoXTbjDEF7PAzpBMSsODVxVwwERSoEKfBEi7fRAkCDFxw__',
      alt: 'Bindhvasni',
      category: 'Nepal',
      title: 'Ganga River at Rishikesh'
    },
    {
      id: 23,
      src: 'https://media-hosting.imagekit.io//144c053bdc654a5d/Yamunotri.jpg?Expires=1835977054&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZZopTDRbGMGrQFM8vwPoUNmZGkSQpg5FEcUoZ1iaXqLJuDihvpvLZAYhtLpJNv4yZi72ht-H8hlCyFUpDlZbztQGQM9HP3347482vx1Kn-8RGa4KAVPXTKosClhI2YgJL5aIfWZca3SCz3-Jbev9yW41aW3MWe5o1h8zXbahXEk2XJl3HSfllLqYugMtxDTBWvdnHFTGXSNvPclrbRn~68l~P8cmog8XYl0XbZLttgyuTd1dqYq-NFZ8O9LuU5J7VjuTB48OROoVGyEiGFGShx2YGwRaEp2cZFRy1icHsmiv8M~fIHkEtIpXcHui8p2K5ymdMmUMjXyl-3LaLE5DrQ__',
      alt: 'Yamunotri',
      category: 'Chardham',
      title: 'Yamunotri'
    },
    {
      id: 24,
      src: 'https://media-hosting.imagekit.io//dc4a82d98bf24ca3/Yamunotri(2).jpg?Expires=1835977054&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w-~sguX6fPM7G~kaoF-tWhmd~CTGo6QHRs3iNTsoPEybM6j4sZKFPkGDHuSsJRTwxM~X7j8GcDS~Et7TXsUwibBkt6W-JmCIvuYOHKkGmQKjURG6zBvbVyJK-5vhVZH-TGynZne77~ut7R7OHlnoGYb9kmgUq1gUaFN04eBbtpcHN7BPshtt0QSqcKhfZpMNy274FCNe5kqlzLfZqvVV7ObGETdypp94dpCX7I9Oe-MAvmJ81BisTeqh4LckSLaQ9KGL8iqZbFY8I3sbhGHRnJ8D2HrDfpdnYzQTO56~mUNwSuF1zGLxTe6uwIT1oIZzUSZQxd3erQjNzGquwhq~gQ__',
      alt: 'way to Yamunotri',
      category: 'Chardham',
    },
    {
      id: 25,
      src: 'https://media-hosting.imagekit.io//5f837e7455b648fa/Yamunotri(1).jpg?Expires=1835977054&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pSBJGyr2J3YhKpvM7lhnvQdxIUodZAZwTN9YtNjE-JutE8kspzo9e4HpNkiP7ENh4XN7KUzzof45ryi~~hMUUoiOG-3n7BvXS5nc2RSqW1DZ-OhVscdbiTyOcJ-osVhobDgmOHZbXwdolXEyAWSKgSKYRwVq7A5I2WOu3UYg0H60LOKlaNcJ7wyvzF0y2doicWYjTbnvDuLurAAG~51qmGrEO~zK5JZL5hStxys1dByqz9c0xudk6ToqGaeode4yKEMfr81wUXsmSP9gHElCaIYVizVWSvfD584xE7jBBbOSmtNS8SAWJuO3oqAvK3ODH0H7bBPAw8uXHv2tDOMEwA__',
      alt: 'group photo Yamunotri',
      category: 'Chardham',
    },
    {
      id: 26,
      src: 'https://media-hosting.imagekit.io//8777c7b850c8408b/IMG-20250306-WA0047.jpg?Expires=1835977054&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bKjmlhIT5kkC4-PQrR1v5oh~lPqPNAaSu9NFE6zrWNfxKAPYZadfO9cbhEOGjrNSbM7ZCh5BcrJ6bWpP2TLyFU3-3Xx6zqiKhtpFvhJ6DYbEOpdMHsIU~GvltjBOY3d0EUwZzsiKF-VsTbNjPIar~vSX5bi9p2m5KSZgX6KFQP6sb-gomVZ8wOfgYrlcFSa7jx5kczrNDRoS6yPGzAJOmT9amKNgJk1ZHyzzDBKA7O4-hF3hwW2P0zyumogMabqy2x5D3LOlMl6gNFC9msTDCF7rEbhROfWeUH4MbIC75TDeKQ6ugzTQ474Og5jyRXs3IzLZGPZYG-ma9KSNPlJXvQ__',
      alt: 'Starting of Yamunotri yatra',
      category: 'Chardham',
    },
    {
      id: 27,
      src: 'https://media-hosting.imagekit.io//c03ea43509ac49a6/Gangotri.jpg?Expires=1835977054&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=INL3ndS7mV2vdBigK5TAe0J1pTsaSDzL4kN5qekSQMasWOq0IhcZAyoq8trdZl2YeSP98pVaM8Y5Wy14L-tWJSTbo8att6UhDz~GSuRx4xQ7WJsQI-9zZNYNwEJRkMj0~f6zGFSgQAkKaFU8pqFwWuKBr--sPpQ0UfpU6s8p-KIRV13IqaPZQeQyEIRINQGYMS0jZ5-jA0lWxZP8RC4YQq5T7x8~wCer6iDM2dipmIb8gDKLNDxkq0UuDKO0lJIDSfEtAzqT4WYFX3Fh0CLlHkLJzJpRlBHm6dPmL3e0lfY-lorBOMV2DB~R2kBTg8f9YK7pGdDmfHlOlDuN2aG~6Q__',
      alt: 'Gangotri',
      category: 'Chardham',
      title: 'Laxman Jhula Bridge'
    },
    {
      id: 28,
      src: 'https://media-hosting.imagekit.io//cdda6da2979548b6/1741370469247.jpg?Expires=1835979137&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fWD1m5KxxlgvNmdj2lup-BqbgRc3SLk3i5CHYLyyb39ma3spnWIaALF2hhg8L--F6B2nGqBFiXpcRIU5fLbTdDsvN60vV0U2NyHJHcnhdx-j~ZTwVbwZZsptDLKn8Da3LyKnh-Tv8jzGJVgOshrD3dl2EmxJO2gtxsWxFq4K-V9b9Ytg1PYcOyaADGu8plxO9TGqm5tN0AdzZgCuKcQEjkm20gHDLTNCpCZYKcjkWivfG2Y4UsZlaqfkLDtr8UyR~cVuE8zLIRLubia8CxKGKwP6Ypsn54tH0E~-9j5HIu2bUgpx8eQNT4NmhipJR771GPnxHbWMB2B7~iX6J~~FDQ__',
      alt: 'Tirupati Balaji',
      category: 'Dakshin Yatra',
    },
    {
      id: 29,
      src: 'https://media-hosting.imagekit.io//aaec5d1285a24176/Vivekanand.jpg?Expires=1835979651&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=We7hYCa4GbDIQUExczABQIVxkmtJjJysxBc62CQUd4GIj0ORpRqxyIrr8TSdBdkNIrsPKmbAsi2SU4ALMptOBMOW-bGtEbYx8gQ~IXG0UytLmHxqE70vSpnYIURqQsdjoPX3cXulGrDd~lgY132FPmolqIaV29Yh5avIF5MCB2-JxYl9JNJ-TNlN-WbS1FJZKJvA0tLvI9l~lqpPBtTg5dGcsHPXFuOjYFHfDuNGXSmg4vAmjM~hl4vP9~Voe6sE5Hq39tt3n57t6HSG3uEne9tBwEHnA0xFOA6JBExNd-qQZAPt7OnAkB4yWOmDsfy6h6knEArclPv8gogGfbcxGg__',
      alt: 'Vivekanand',
      category: 'Dakshin Yatra',
    },
    {
      id: 30,
      src: 'https://media-hosting.imagekit.io//c67a9bb636d447db/IMG-20250306-WA0030.jpg?Expires=1835979651&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yCKrb0Hz6DFAsmFrtdl42i8caw-CnC3Wwryc5SaC3QhesaJODH~8nLRCUZWQCKofgh8Jw5xzBYWMIqbkYmpGZdPVADZlLx3dzkKXK9yGXDtTAzSfIC62MwzBDz3Ve2gh9qGPtKobYm8OqO6jL-l-Ls18l9yedixH4Wyos2nv2lA1i5eL87DhErVG1Gg-irlIk8keSEm8AWvDVHmCvXRb64xs3gyWdFo7Cj8f27M2L5APWC8ily-dAu7CyfwBv~5Pvo4mbDAcNkVB15vJd42Q0IJsG1sRiVrmjUEmb3v7yXZueZBbSy4cnorzL0ww6w0zvioMKeWrJ53MlwstT-8sEQ__',
      alt: 'Vivekanand',
      category: 'Dakshin Yatra',
    },
    {
      id: 31,
      src: 'https://media-hosting.imagekit.io//b7f9bf26ee834ea4/IMG-20250306-WA0018.jpg?Expires=1835979918&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iEqtQsOBr~JFdNcrxHJxqnQ--3bKfiNZF8JSqmS~xwhaxkV~zuF82FvmMJ6fkU8SwWszHIxqtPytVL7cSzz0Nb-2sN94knITYto~pms~TrngNSYcOWYQSYpUdZdR8bDqAaLVmbKB~9cIscjaJU9SVJhGTG4~mKfeyHYvf3sQNcEFGR1TSJ~zzvzndASe9EzRYRVu5KDEj-E0Sg5WcePBys8TxrhnfZzeY0vY2xQocd4m7z7EopuAMZd89Zax8uv4kpEKCT2infeSue1CN2wqmStxYI8yE5bNXM-J1DGpZwXEdCfUZiL0AMshWiFA1QzYsU95H4MnEnJ7yIrdQFbgqQ__',
      alt: 'Ayodhya Darshan',
      category: 'Ayodhya',
    },
    {
      id: 32,
      src: 'https://media-hosting.imagekit.io//e55ed9feb4084863/IMG-20250306-WA0016.jpg?Expires=1835979918&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o9XtKn~jjpGvpKuWNZUYsfeBHUtHv8SsTPJSZb-e2Rl2Si1PWcifQ1j~lKpgblWbT9nomYARAiEQtYH-~Bu-a~HeAyRP1S0PgIpug8LKyT6YU9sw6qKtsZkdluzjoxtoisqzgqwX2CL6iaMaIzm8l~AhDdnfYEZCYlBRYlL9P-E~YsoN3B-B~xbHsUwvrlgZ1ldJgHi7D0inLxCBKz~DIwTMVkX~Q1Nzu7fUTRhSH~y4YPD-qbmW7VyhJl4WLnKJoYKHVZmBVzCKpaGstkOBvHJlvj1ATwer1bt65gOzHPYspgdQjru229xmhpdTJhTprbdOHvPrbF5TwO9wSODn9Q__',
      alt: 'Ayodhya Darshan',
      category: 'Ayodhya',
    },
    {
      id: 33,
      src: 'https://media-hosting.imagekit.io//001afe8fd02041bf/IMG-20250306-WA0036.jpg?Expires=1835980417&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DO1nsev4vhtAlmJdZ8RtGV78u43xf-6XTEVuodLCndicLzbRLExy8NsHR-38fN9BXWVQSt-dTNuEtv67W2SVumQHXQW-3YUzYUMPWXtU4Uo6d0WHONX56-FxALdaUa-BbLSwgysGJk~AzWCFKfk2EfqRdWnpcHfo9X8Uwg32E0AgCrjD6~cnnHGwrz65EeTI8cmxhmM53oSXKSkh2P3eRjy4-eVNfA7~Pnwr27gLLohP9OyW8QC2atZZmtNhn9s3BbwrHcgXG0xoz~DcwJ6lC6ggy5cQIlmrM0lokRi6m9gAn4dK0qrZUc2IfE3lyWM01cw7ubHwjgGpRettFKbCuA__',
      alt: 'Sehore',
      category: 'Sehore',
    },
  ]; 

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'Nainital', name: 'Nainital' }, 
    { id: 'Kainchi Dham', name: 'Kainchi Dham' },
    { id: 'Maha-Kumah', name: 'Maha-Kumah' },
    { id: 'Nepal', name: 'Nepal' },
    { id: 'Chardham', name: 'Chardham' },
    { id: 'Dakshin Yatra', name: 'Dakshin Yatra' },
    { id: 'Ayodhya', name: 'Ayodhya' },
    { id: 'Sehore', name: 'Sehore' },  
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-primary">Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Explore the divine beauty of sacred places through our collection of stunning photographs
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image.src)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden group h-64">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                        <p className="text-sm capitalize">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Inspired by these sacred places?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the divine beauty and spiritual energy of these destinations in person with our guided tours.
            </p>
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Start Your Yatra Now <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-4xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={selectedImage} 
                    alt="Enlarged view" 
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;