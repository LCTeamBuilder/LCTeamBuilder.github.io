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

const EdgarFamilyChiefButlerRyoshuDefense: Skill = {
    Name: "Mediocre",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Evade] Heal 3 SP (5 times per turn)<br>"+
            "[On Evade] Gain +1 [Poise] Count (5 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/MediocreUT4.png'
}

const EdgarFamilyChiefButlerRyoshuSkill1: Skill = {
    Name: "Receiving Arts 1: The Hunt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the target's, gain Clash Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [B.M.]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts1TheHunt.png'
}

const EdgarFamilyChiefButlerRyoshuSkill2: Skill = {
    Name: "Receiving Arts 7: Capture",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is faster than the main target's, gain Clash Power +1 for every 2 Speed difference (Max 3)<br>"+
            "[Combat Start] Consume 6 [Poise] Count on self to gain +2 Atk Weight for this Skill"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Poise]<br>"+
            "[On Crit] Inflict 1 [B.M.]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [B.M.]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts7Capture.png'
}

const EdgarFamilyChiefButlerRyoshuSkill3: Skill = {
    Name: "Receiving Arts 2: S.Y.N.C.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has [B.M.], Clash Power +1 If this unit's Speed is faster than the target's, gain +1 Coin Power for every 2 Speed difference (Max 2)<br>"+
            "[On Use] Gain +7 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Gain 5 [Poise] <br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Raise Stagger Threshold by 30% of damage dealt<br>"+
            "[On Crit] Inflict 1 [B.M.]"),
        new SkillDescriptionPart("[On Hit] If target is Staggered, deal +40% Damage on Critical Hit<br>"+
            "[On Hit] Inflict 2 [B.M.]<br>"+
            "[On Kill] Reuse Skill once on a random target with [B.M.]<br>"+
            "[On Kill] (Does not activate on Reuse. Does not activate when there are no remaining targets with [B.M.])")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ryoshu/EdgarFamilyChiefButler/ReceivingArts2SYNC.png'
}

export const EdgarFamilyChiefButlerRyoshu: Identity = {
    Id: 10408,
    Name: "Edgar Family Chief Butler",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [EdgarFamilyChiefButlerRyoshuSkill1, 
            EdgarFamilyChiefButlerRyoshuSkill2, 
            EdgarFamilyChiefButlerRyoshuSkill3, 
            EdgarFamilyChiefButlerRyoshuDefense],
    Passives: [
        new Passive("Clearing Household Chores",
            PassiveTypeEnum.Combat,
            "On Hit against targets with [B.M.], gain +1 [Poise] Count, and gain 1 [Haste] next turn (3 times per turn)<br>"+
            "On Crit against targets with [B.M.], eliminate [B.M.] on target, then, if this unit's Speed is faster than the target's, deal +10% Damage on Critical Hit for every 1 Speed difference (max 60%)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleaning Command",
            PassiveTypeEnum.Support,
            "When the ally that was deployed last wins a Clash, gain +1 [Poise] Count (3 times per turn), and gain 1 [Haste] next turn (once per turn)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ryoshu/Identities/EdgarFamilyChiefButler/10408gacksung.png',
    PortraitImageDir: './assets/Sinners/Ryoshu/Identities/EdgarFamilyChiefButler/10408gacksunginfo.png'
}