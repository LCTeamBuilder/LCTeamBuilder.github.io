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

const DieciAssocSouthSection4DirectorMeursaultDefense: Skill = {
    Name: "Fixated Study",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] [Discard] 1 Skill of the highest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Gain +6 [Aggro] to this Skill Slot next turn")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/FixatedStudyUT4.png'
}

const DieciAssocSouthSection4DirectorMeursaultSkill1: Skill = {
    Name: "Studious Dedication",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Gain (Insight x 5% of Max HP) Shield if this Skill is Discarded<br>"+
            "[On Use] [Discard] 1 Skill of the lowest rank in all of this unit's Skill Slots<br>"+
            "[On Use] Gain Clash Power +([Insight] - 1) (max 2)<br>"+
            "[Clash Win] Gain 2 [Erudition] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/StudiousDedication.png'
}

const DieciAssocSouthSection4DirectorMeursaultSkill2: Skill = {
    Name: "Moment of Erudition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Insight] on self (max 15%)<br>"+
            "[Combat Start] Apply [Erudition] equal to [Insight] on self to 2 random allies and on self (prioritizes allies with [Discard] that has the least [Erudition])<br>"+
            "[On Use] [Discard] 2 of this unit's Skills in ascending order of ranks from all of its Skill Slots<br>"+
            "[On Use] Coin Power +1 for every 6 [Sinking] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] equal to ([Insight] x 2)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/MomentOfErudition.png'
}

const DieciAssocSouthSection4DirectorMeursaultSkill3: Skill = {
    Name: "Scorch Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Insight] (max 45%)<br>"+
            "[On Use] Coin Power +1 for every 6 [Sinking] on target (max 2)<br>"+
            "[Before Attack] Consume all [Erudition] on self and gain the same value as additional [Insight]<br>"+
            "[After Attack] At 4+ [Insight], reset value to 1 (if this Skill defeats an enemy, reset value to 3 instead)"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] Potency/Count equal to [Insight] against the target (how much of that [Sinking] is Potency or Count is randomly determined)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/ScorchKnowledge.png'
}

export const DieciAssocSouthSection4DirectorMeursault: Identity = {
    Id: 10510,
    Name: "Dieci Assoc. South Section 4 Director",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4DirectorMeursaultSkill1, 
            DieciAssocSouthSection4DirectorMeursaultSkill2, 
            DieciAssocSouthSection4DirectorMeursaultSkill3, 
            DieciAssocSouthSection4DirectorMeursaultDefense],
    Passives: [
        new Passive("Study Hall",
            PassiveTypeEnum.Combat,
            "Every time an other allies Discards a Skill, apply 1 [Erudition] to the ally and self (once per Skill, 3 times per turn)<br>"+
            "Turn End: Next turn, gain [Pierce DMG Up] and [Blunt DMG Up] equal to the number of other allies that Discarded Skills (max 3)",
            [{ sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Diligent Learning",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest max HP Discards a Skill, gain (5 x Discarded Skill rank)% of the max HP as Shield (once per turn)<br>"+
            "If the unit has [Insight], multiply the above Shield value by 1.5",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/DieciAssocSouthSection4Director/10510gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/DieciAssocSouthSection4Director/10510gacksunginfo.png'
}