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
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const CinqAssocsouthSection4OutisDefense: Skill = {
    Name: "Retraite",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, gain Coin Power based on Speed difference (Coin Power +1 for every Speed difference, max 3)<br>"+
            "[On Evade] Gain 1 [Poise] (Max 10)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/RetraiteUT4.png"
}

const CinqAssocsouthSection4OutisSkill1: Skill = {
    Name: "Marche",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Haste] next turn<br>"+
            "[On Use] This Skill Slot gains 3 [Aggro] next turn"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/Marche.png"
}

const CinqAssocsouthSection4OutisSkill2: Skill = {
    Name: "Punition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit's Speed is higher than the target's, Coin Power +2<br>"+
            "[On Use] Gain +2 [Poise] Count<br>"+
            "[On Use] This Skill Slot gains 4 [Aggro] next turn"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/Punition.png"
}

const CinqAssocsouthSection4OutisSkill3: Skill = {
    Name: "Balestra Fente",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Final Power +4<br>"+
            "[Clash Win] Gain [Poise] based on Clash count (Max 10)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Outis<br>"+
            "[On Hit] Apply 2 [Haste] next turn to 2 allies with the slowest Speed<br>"+
            "[On Crit] +70% Damage on Critical Hit", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/BalestraFente.png"
}

export const CinqAssocsouthSection4Outis: Identity = {
    Id: 11106,
    Name: "Cinq Assoc.South Section 4",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [CinqAssocsouthSection4OutisSkill1, 
            CinqAssocsouthSection4OutisSkill2, 
            CinqAssocsouthSection4OutisSkill3, 
            CinqAssocsouthSection4OutisDefense],
    Passives: [
        new Passive("Redirect",
            PassiveTypeEnum.Combat,
            "On Evade, gain 1 [Haste] next turn, lower this unit's Stagger Threshold by 5 (Max 3)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Mentor's Counsel",
            PassiveTypeEnum.Support,
            "If the fastest ally's Speed is higher than Speed of all enemies, the fastest ally gains Clash Power +1<br>"+
            "If the said ally is a Cinq Association Fixer, the fastest ally deals +10% Pierce Damage",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/CinqAssociationSouthSection4/11106gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/CinqAssociationSouthSection4/11106gacksunginfo.png"
}