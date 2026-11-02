import Phaser from 'phaser';

export const CHARACTERS = [
    { id: 'donia', name: 'دنيا نينجا المانجو', color: 0xffcc00, speed: 450, audio: 'السرعة في السر.. المانجو الفص ما بتهزرش!' },
    { id: 'omar', name: 'عمر سوبر التفاح', color: 0xff0000, defense: 100, audio: 'التفاح السكري حضر.. اجهز للصدمة!' },
    { id: 'mona', name: 'منى ساحرة الفراولة', color: 0xff3366, heal: true, audio: 'الفراولة دي مش للأكل.. دي للضرب بالقاضية!' },
    { id: 'salma', name: 'سلمى فارس الكرز', color: 0x990033, attack: 95, audio: 'كرزتين على السريع.. والضربة المقبلة في الجبهة!' },
    { id: 'nada', name: 'ندى حكيمة الليمون', color: 0xccff00, stun: true, audio: 'الليمون المعصفر هيشلوطكم كلكم!' },
    { id: 'sayed', name: 'المعلم سيد الموز', color: 0xffff33, trap: true, audio: 'عنبة على عنبة تجيب موز.. ضربتي ما بتخيبش!' },
    { id: 'tarek', name: 'الكابتن طارق الكيوي', color: 0x669933, speed: 500, audio: 'شمال يمين.. لكمة الكيوي توديك السرير!' },
    { id: 'hassan', name: 'الأسطى حسن الأناناس', color: 0xff9900, bomb: true, audio: 'الألغام الشوكية اترست.. اللي يقرب يفرقع!' },
    { id: 'saber', name: 'الفتوة صابر البطيخ', color: 0x009933, quake: true, audio: 'المرزبة نزلت.. الحارة كلها هتتهز!' },
    { id: 'hajj_rady', name: 'الحاج راضي الجريب فروت', color: 0xff6666, shield: true, audio: 'درع الحمض شغال.. محدش هيعرف يلمسني!' },
    { id: 'magdy', name: 'العملاق مجدي التين', color: 0x660066, rage: true, audio: 'كل ما تضربني أكتر.. كل ما هكبر وأفرمك!' },
    { id: 'sheikh_gouda', name: 'الشيخ جودة العنب', color: 0x330066, summons: 4, audio: 'عناقيد العنب هتحاصركم من كل حتة!' },
    { id: 'hamouda', name: 'حمودة بركان الخوخ', color: 0xff6600, fire: true, audio: 'نار الخوخ الحارقة هتشوي الكل!' },
    { id: 'karim', name: 'كريم فارس الرمان', color: 0xcc0000, barrier: true, audio: 'حبات الرمان حيطة سد قدام أي هجوم!' },
    { id: 'mina', name: 'الشبح مينا الكاكا', color: 0xff9933, stealth: true, audio: 'مش هتشوفني غير بعد ما يجيلك الضرب!' },
    { id: 'mostafa', name: 'الجن مصطفى الجوافة', color: 0xffffcc, ultimate: 'Supernova', audio: 'أنا القوة الخفية لكل الفواكه.. استعد للـ Supernova!' }
];

class MainScene extends Phaser.Scene {
    constructor() { super({ key: 'MainScene' }); }
    create() {
        this.add.text(640, 100, 'مانجا الفواكه المصرية - حلبة القتال', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const platform = this.add.rectangle(640, 600, 1200, 40, 0x555555);
        this.physics.add.existing(platform, true);
        this.player1 = this.add.rectangle(300, 400, 50, 80, CHARACTERS[1].color);
        this.physics.add.existing(this.player1);
        this.player1.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.player1, platform);
        this.player2 = this.add.rectangle(900, 400, 50, 80, CHARACTERS[0].color);
        this.physics.add.existing(this.player2);
        this.player2.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.player2, platform);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.text(640, 200, `Player 1: ${CHARACTERS[1].name}\n"${CHARACTERS[1].audio}"`, { fontSize: '18px', fill: '#ff4444', align: 'center' }).setOrigin(0.5);
    }
    update() {
        if (this.cursors.left.isDown) this.player1.body.setVelocityX(-300);
        else if (this.cursors.right.isDown) this.player1.body.setVelocityX(300);
        else this.player1.body.setVelocityX(0);
        if (this.cursors.up.isDown && this.player1.body.touching.down) this.player1.body.setVelocityY(-600);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    parent: 'game-container',
    fps: { target: 60 },
    physics: { default: 'arcade', arcade: { gravity: { y: 1200 }, debug: false } },
    scene: MainScene
};

new Phaser.Game(config);
