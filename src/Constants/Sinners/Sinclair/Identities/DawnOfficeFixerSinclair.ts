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

const DawnOfficeFixerSinclairDefense: Skill = {
    Name: "Rue",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("When in a Volatile E.G.O state, Base Power +1 for every 2 [Burn] on target (max 20)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/RueUT4.png'
}

const DawnOfficeFixerSinclairSkill1: Skill = {
    Name: "Fierce Charge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Burn]<br>"+
            "[Heads Hit] When in a Volatile E.G.O state, Reuse Coin (once per Skill)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/FierceCharge1.png'
}

const DawnOfficeFixerSinclairSkill2: Skill = {
    Name: "Sunset Blade",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If the target has 4+ [Burn], Clash Power +1<br>"+
            "[On Use] When in a Volatile E.G.O state, consume 5 SP<br>"+
            "[Before Attack] When in a Volatile E.G.O state, Atk Weight +1<br>"+
            "- At 45 SP, Atk Weight +2 instead<br>"+
            "[After Attack] When in a Volatile E.G.O state, consume 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Burn] Count", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/SunsetBlade1.png'
}

const DawnOfficeFixerSinclairSkill3: Skill = {
    Name: "Stigmatize",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 7 [Burn] on target (max 2)<br>"+
            "When in a Volatile E.G.O state, activate Blazing Strike instead<br>"+
            "[Clash Win] Heal 10 SP<br>"+
            "[Clash Lose] Lose 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/Stigmatize1.png'
}

const DawnOfficeFixerSinclairSkill4: Skill = {
    Name: "Blazing Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 13,
    Coins: 1,
    CoinValue: +15,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +2 for every 4 (sum of [Burn] Potency on all enemies) (max 8)<br>"+
            "[Clash Win] Heal 10 SP<br>"+
            "[Clash Lose] Lose 30 SP<br>"+
            "Deal +10% more damage for every Wrath Reson. (max 60%)<br>"+
            "If at 4+ highest Wrath A-Reson., deal +20% more damage for every Wrath Reson. instead (max 120%)<br>"+
            "[After Attack] Lose 15 SP"),
        new SkillDescriptionPart("Deal +4% damage for every 1 [Burn] on target (max 120%)<br>"+
            "[On Hit] If the target has 10+ [Burn], inflict 2 [Burn] against (number of highest Reson.) random enemies<br>"+
            "- If the above Reson. was a Wrath Reson., inflict +1 [Burn] Count as well<br>"+
            "[On Hit] Inflict 10 [Burn]<br>"+
            "[On Kill] Randomly inflict ([Burn] Potency of the defeated target between all enemies (max 10. In Focused Encounters, between all Parts)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/DawnOfficeFixer/Stigmatize2.png'
}

export const DawnOfficeFixerSinclair: Identity = {
    Id: 11009,
    Name: "Dawn Office Fixer",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DawnOfficeFixerSinclairSkill1,
            DawnOfficeFixerSinclairSkill2,
            DawnOfficeFixerSinclairSkill3,
            DawnOfficeFixerSinclairSkill4,
            DawnOfficeFixerSinclairDefense],
    Passives: [
        new Passive("Unstable Shell of Ego",
            PassiveTypeEnum.Combat,
            "Turn Start: At 40+ SP, consume 20 SP to enter the Volatile E.G.O::Waxen Pinion state. (this 'Turn Start' effect does not activate repeatedly)<br>"+
            "If 2+ allies are defeated in a single turn, and if this unit's SP isn't at -45 at Turn End, reset SP to 20, then, enter the Volatile E.G.O::Waxen Pinion state.<br><br>"+

            "If this unit gets Staggered due to damage or raised Stagger Threshold when entering the Volatile E.G.O state, recover from Stagger. If the Stagger is something that cannot be naturally recovered from, this unit does not enter the Volatile E.G.O state.<br><br>"+

            "Gain [Volatile Passion] while in the Volatile E.G.O state.<br><br>"+

            "Turn Start: At 0 or less SP, exit the Volatile E.G.O::Waxen Pinion state."),

        new Passive("Stigma Workshop Weaponry/Passion",
            PassiveTypeEnum.Combat,
            "This unit inflicts +1 more [Burn] Potency and Count with its Skills (activates 6 times per turn)<br>"+
            "When in a Volatile E.G.O state, and at 0+ SP, gain + Coin Power +(SP/20). At 45 SP, gain +3 Coin Power instead.",
            [{ sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Flaming Brand",
            PassiveTypeEnum.Support,
            "When the first Sinner to be Deployed Heads Hits, inflict +1 [Burn] Count (4 times per turn)",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/DawnOfficeFixer/11009gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/DawnOfficeFixer/11009gacksunginfo.png'
}