import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const NCorpEGOFellBulletYiSangDefense: Skill = {
    Name: "Front Line Support",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "[On Use] Coin Power +1 for every 2 [Poise] on self (max 3)<br>" +
            "[On Use] Gain 2 [Torn Memory]"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>" +
            "[On Hit] Gain +2 [Poise] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/NCorpEGOFellBullet/1011304.png'
}

const NCorpEGOFellBulletYiSangSkill1: Skill = {
    Name: "See Through Defenses",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Deal +15% damage for every [Torn Memory] on self (max 105%)<br>" +
            "[On Use] Coin Power +1 for every 5 [Poise] on self (max 2)<br>" +
            "[On Use] Base Power +1 for every 3 [Poise] Count on self (max 2)<br>" +
            "[On Use] Gain +2 [Poise] Count and 1 [Torn Memory]"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>" +
            "[On Crit] Inflict +1 [Bleed] Count<br>" +
            "[On Crit] Gain 1 [Torn Memory]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/NCorpEGOFellBullet/1011301.png'
}

const NCorpEGOFellBulletYiSangSkill2: Skill = {
    Name: "Punch Through",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Deal +15% damage for every [Torn Memory] on self (max 105%)<br>" +
            "[On Use] Coin Power +1 for every 5 [Poise] on self (max 2)<br>" +
            "[On Use] Gain 2 [Poise]"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>" +
            "[On Crit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Gain 2 [Poise]<br>" +
            "[On Hit] Gain 1 [Torn Memory]<br>" +
            "[On Crit] Inflict 2 [Bleed]<br>" +
            "[On Crit] Gain 2 [Torn Memory]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/NCorpEGOFellBullet/1011302.png'
}

const NCorpEGOFellBulletYiSangSkill3: Skill = {
    Name: "Target Readjustment Fire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Targets the unit with the least HP<br>" +
            "- At 7+ [Torn Memory], primarily targets among allies as the main target<br>" +
            "[Combat Start] Gain +1 Atk Weight for every 3 [Torn Memory] on self (max 2)<br>" +
            "[On Use] Coin Power +1 for every 5 [Poise] on self (max 2)<br>" +
            "[On Use] Base Power +1 for every 3 [Poise] Count on self (max 2)<br>" +
            "[On Use] Gain 1 [Poise] for every [Torn Memory] on self (max 7)<br>" +
            "[After Attack] Lose ([Torn Memory] x 2) SP (max 14)<br>" +
            "[After Attack] If this unit had 7 [Torn Memory] at Combat Start, lose them all<br>" +
            "- If this unit lost all [Torn Memory], and if an ally is killed, heal 20 SP on self"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "This Coin deals damage only against the main target<br>" +
            "If the main target is an ally, activate the following effects:<br>" +
            "- The main target's Pierce Resistance becomes Fatal against this attack<br>" +
            "- Deal +7% damage for every [Torn Memory] on self (max 49%)<br>" +
            "- +3% Damage on Critical Hit for every [Poise] on self (max 60%)", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "This Coin deals damage only against the sub-targets<br>" +
            "- However, if the main target was an enemy, deal damage against the main target<br>" +
            "- If the first Coin failed to kill an ally, 1 random sub-target takes damage<br><br>" +
            "Deal +20% damage for every [Torn Memory] on self (max 140%)<br>" +
            "- If the first Coin killed an ally, deal +40% damage for every [Torn Memory] on self instead (max 280%)<br><br>" +

            "+5% Damage on Critical Hit for every [Poise] Potency (max 50%)<br>" +
            "+10% Damage on Critical Hit for every [Torn Memory] on self (max 70%)<br>" +
            "Deal +(HP percentage the first Coin removed from the main target)% damage (max 100%)<br>" +
            "[On Hit] Inflict 3 [Bleed]<br>" +
            "- If the first Coin killed an ally, inflict 5 [Bleed] and +2 [Bleed] Count instead", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/NCorpEGOFellBullet/1011303.png'
}

export const NCorpEGOFellBulletYiSang: Identity = {
    Id: 10113,
    Name: "N Corp. E.G.O::Fell Bullet",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30, 15],
    DefenseLevel: +2,
    SlashResist: 0.5,
    PierceResist: 1,
    BluntResist: 2,
    Skills: [NCorpEGOFellBulletYiSangSkill1, 
            NCorpEGOFellBulletYiSangSkill2, 
            NCorpEGOFellBulletYiSangSkill3, 
            NCorpEGOFellBulletYiSangDefense],
    Passives: [
        new Passive("Volatilized Memory",
            PassiveTypeEnum.Combat,
            "Turn End: lose all [Torn Memory] on self. Next turn, gain the same amount of [Torn Memory] equal to the amount lost."),
        new Passive("Fell Bullet",
            PassiveTypeEnum.Combat,
            "If this unit killed an allied unit with its attack, gain Fell Bullet.pngFell Bullet for the next turn (including with this unit's 'E.G.O Corrosion' and attacks against allies)<br>" +
            "If this unit uses its E.G.O 'Fell Bullet' and consumes [Torn Memory]: next turn, gain [Torn Memory] equal to the amount of it consumed by the end of the last turn.",
            [{ sin: SinEnum.Pride, amount: 6}],
            PassiveCostTypeEnum.Owned),

        new Passive("Designate Target",
            PassiveTypeEnum.Support,
            "When the ally with the slowest Speed attacked an ally: After Attack, gain 1 [Damage Up] next turn (2 times per turn)<br>" +
            "- If the attacked ally is killed by this attack, gain 1 [Damage Up] for the whole Encounter instead (max 2 per Stage per Identity)<br>" +
            "- Can gain only up to 2 [Damage Up] from the above effect.",
            [{ sin: SinEnum.Pride, amount: 4}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/NCorpEGOFellBullet/10113gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/NCorpEGOFellBullet/10113gacksunginfo.png'
}