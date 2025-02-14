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

const ZweiAssocWestSection3IshmaelDefense: Skill = {
    Name: "Your Shield",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] Gain 2 [Defensive Stance]. (once per turn)<br>"+
            "[On Use] Gain +10 [Tremor] Count (once per turn)<br>"+
            "[Clash Win] Trigger [Tremor Burst]"),
            new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/YourShieldUT4.png'
}

const ZweiAssocWestSection3IshmaelSkill1: Skill = {
    Name: "Zwei Knight's Greatsword Form",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 3)<br>"+
            "[On Use] Base Power +1 for every 4 [Defense Level Up] (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[On Hit] Gain 2 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count<br>"+
            "[On Hit] Gain 2 [Defense Level Up] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/ZweiKnightsGreatswordForm.png'
}

const ZweiAssocWestSection3IshmaelSkill2: Skill = {
    Name: "Can't Let You Through.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 5)<br>"+
            "[On Use] At 4+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Gain 4 [Defense Level Up] next turn", 2),
        new SkillDescriptionPart("[On Hit] Inflict [Tremor] equal to (([Tremor] Count on self)/2) (max 4)<br>"+
            "[On Hit] At 8+ [Defense Level Up], inflict 1 [Attack Power Down]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/CantLetYouThrough.png'
}

const ZweiAssocWestSection3IshmaelSkill3: Skill = {
    Name: "Ward",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 5)<br>"+
            "[On Use] If this unit is in [Defensive Stance], deal +70% more damage<br>"+
            "[On Use] Coin Power +1 for every 4 [Defense Level Up] on self (max 4)<br>"+
            "[On Use] Gain +10 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Consume all [Tremor] Count on self, and inflict the value of Count consumed as [Tremor] on the target. (max 20)<br>"+
            "- Deal +(excess [Tremor] x 5)% more damage (max 50%)<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>"+
            "[On Hit] If this unit is in [Defensive Stance], trigger [Tremor Burst], then, reduce the target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/ZweiAssocWestSection3/Ward.png'
}

export const ZweiAssocWestSection3Ishmael: Identity = {
    Id: 10810,
    Name: "Zwei Assoc. West Section 3",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 93,
    HealthPerLevel: 3.21,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [ZweiAssocWestSection3IshmaelSkill1, 
            ZweiAssocWestSection3IshmaelSkill2, 
            ZweiAssocWestSection3IshmaelSkill3, 
            ZweiAssocWestSection3IshmaelDefense],
    Passives: [
        new Passive("Shock-nullifying Greatsword",
            PassiveTypeEnum.Combat,
            "At Combat Start, gain [Defense Level Up] equal to [Tremor] Count on self (max 5)<br>"+
            "- If this unit is in [Defensive Stance], double the amount of [Defense Level Up] gained from the above effect.",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Emergency Protection",
            PassiveTypeEnum.Support,
            "At Combat Start, compare each Identity's current HP to their HP at the start of the previous turn. Then, apply 2 Defense Level Up to the Identity with the greatest disparity of HP values between turns.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/ZweiAssocWestSection3/10810gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/ZweiAssocWestSection3/10810gacksunginfo.png'
}