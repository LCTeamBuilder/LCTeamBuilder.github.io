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

const LiuAssocSouthSection4DirectorRodionDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/Counter.png"
}

const LiuAssocSouthSection4DirectorRodionSkill1: Skill = {
    Name: "Flaming Fists",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/FlamingFists.png"
}

const LiuAssocSouthSection4DirectorRodionSkill2: Skill = {
    Name: "Fiery Knifehand-Combust",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Burn] Count", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict +1 [Burn] Count<br>"+
            "[On Hit] If the target has 6+ [Burn] Count, apply 3 [Burn] for 2 targets with no [Burn] or with the least [Burn] Count", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/FieryKnifehandCombust.png"
}

const LiuAssocSouthSection4DirectorRodionSkill3: Skill = {
    Name: "Pinpoint Blitz",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 6+ [Burn], Coin Power +1<br>"+
            "If the target has 6+ [Burn] and [Burn] Count, deal +30% more damage"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]", 3),
        new SkillDescriptionPart("[On Hit] Inflict Wrath Affinity damage equal to [Burn] Potency on target. (Max 30) Reduce Target's [Burn] Count by 2.", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/LiuAssociationSouthSection4Director/PinpointBlitz.png"
}

export const LiuAssocSouthSection4DirectorRodion: Identity = {
    Id: 10908,
    Name: "Liu Assoc. South Section 4 Director",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.74,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LiuAssocSouthSection4DirectorRodionSkill1, 
            LiuAssocSouthSection4DirectorRodionSkill2, 
            LiuAssocSouthSection4DirectorRodionSkill3, 
            LiuAssocSouthSection4DirectorRodionDefense],
    Passives: [
        new Passive("Burning Passion",
            PassiveTypeEnum.Combat,
            "Deal +10% more damage for every 6 [Burn] Potency on target (Max 30%)<br>"+
            "Combat Start: If all enemies have 6+ [Burn] Potency, apply 1 [Wrath DMG Up] to (Highest Wrath A-Reson.) allies in Deployment order<br>"+
            "- In Focused Encounters, the above activates when all enemy Parts have 6+ [Burn] Potency<br>"+
            "- If the ally is a Liu Association Fixer, apply 1 [Attack Power Up]",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Passionate Cheer",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +5% Pierce damage for every 6 [Burn] Potency on target On Hit (Max 15%)",
            [{ sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/LiuAssociationSouthSection4Director/10908gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/LiuAssociationSouthSection4Director/10908gacksunginfo.png"
}