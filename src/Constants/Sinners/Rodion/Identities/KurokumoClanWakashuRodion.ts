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

const KurokumoClanWakashuRodionDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Protection]<br>"+
            "[On Use] Gain +2 [Poise] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/Counter.png'
}

const KurokumoClanWakashuRodionSkill1: Skill = {
    Name: "Sharpened Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("At 4+ [Poise], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 4 [Poise]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/SharpenedBlade.png'
}

const KurokumoClanWakashuRodionSkill2: Skill = {
    Name: "Scattering Slash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "At 5+ [Poise], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]<br>"+
            "[On Hit] Inflict 3 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/ScatteringSlash.png'
}

const KurokumoClanWakashuRodionSkill3: Skill = {
    Name: "Sky-clearing Cut",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +18,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Bleed], double the crit chance<br>"+
            "At 10+ [Poise], +100% Critical Damage"),
        new SkillDescriptionPart("[On Crit] Inflict 10 [Bleed]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Rodion/KurokumoHenchwoman/SkyclearingCut.png'
}

export const KurokumoClanWakashuRodion: Identity = {
    Id: 10902,
    Name: "Kurokumo Clan Wakashu",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KurokumoClanWakashuRodionSkill1, 
            KurokumoClanWakashuRodionSkill2, 
            KurokumoClanWakashuRodionSkill3, 
            KurokumoClanWakashuRodionDefense],
    Passives: [
        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "At 5+ [Poise], counter skills use Skill 3.",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dark Cloud Sword Swordsmanship",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +10% Slash damage.",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Rodion/Identities/KurokumoHenchwoman/10902gacksung.png',
    PortraitImageDir: './assets/Sinners/Rodion/Identities/KurokumoHenchwoman/10902gacksunginfo.png'
}