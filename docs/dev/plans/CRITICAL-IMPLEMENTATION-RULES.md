# ⚠️ CRITICAL IMPLEMENTATION RULES

**MANDATORY PROCESS - NO EXCEPTIONS**

---

## 🚨 RULE #1: ALWAYS CREATE THE PLAN FILE FIRST

**BEFORE** implementing anything:

1. **Copy the template:**
   ```bash
   cp docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md \
      docs/dev/plans/PLAN-00X-FEATURE-NAME.md
   ```

2. **Fill in ALL sections completely:**
   - Header (task, priority, effort, impact)
   - Objective
   - Success criteria
   - Before & After metrics
   - All 6 phases with step-by-step instructions
   - Complete code templates (copy-paste ready)
   - Testing procedures
   - Documentation updates
   - Git workflow
   - Troubleshooting section
   - Completion checklist

3. **Review and validate the plan**

4. **Commit the plan file to Git**

5. **ONLY THEN start implementation**

---

## 🚨 RULE #2: NO IMPLEMENTATION WITHOUT A COMPLETE PLAN

**NEVER** start coding before the plan file is:
- ✅ Created from template
- ✅ Completely filled in (no placeholders)
- ✅ Reviewed for completeness
- ✅ Committed to Git

**If you start implementing without a plan:**
- ❌ STOP immediately
- ❌ Create the plan file
- ❌ Review what was done
- ✅ Document it in the plan
- ✅ Continue properly

---

## 🚨 RULE #3: FOLLOW THE TEMPLATE STRUCTURE

Every plan MUST include:

### Required Sections (No Exceptions)
1. ✅ Header Information
2. ✅ Objective & Benefits
3. ✅ Success Criteria (checkboxes)
4. ✅ Before & After Metrics
5. ✅ Phase 1: Preparation
6. ✅ Phase 2: Implementation
7. ✅ Phase 3: Integration
8. ✅ Phase 4: Testing
9. ✅ Phase 5: Documentation
10. ✅ Phase 6: Git Commit & Push
11. ✅ Complete Code Templates
12. ✅ Troubleshooting Section
13. ✅ Completion Checklist

### Code Templates Must Be:
- Production-ready
- Copy-paste ready
- No placeholders
- Fully commented
- Complete (not partial)

---

## 🚨 RULE #4: COMMIT THE PLAN BEFORE IMPLEMENTATION

```bash
# Create plan
cp docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md \
   docs/dev/plans/PLAN-00X-FEATURE.md

# Edit and complete the plan
# ... fill in all sections ...

# Commit the plan FIRST
git add docs/dev/plans/PLAN-00X-FEATURE.md
git commit -m "docs: Add PLAN-00X implementation plan"
git push origin main

# ONLY NOW start implementing
# Follow the plan step by step
```

---

## 🚨 RULE #5: REFERENCE DOCUMENTATION SOURCES

When creating a plan, ALWAYS reference:

1. **TEMPLATE-IMPLEMENTATION-PLAN.md** - Structure and format
2. **QUICK-REFERENCE.md** - Quick reminders
3. **MODULARITY_IMPROVEMENTS.md** - Specific improvement details
4. **README.md** (in plans folder) - Workflow and best practices

**Copy code from MODULARITY_IMPROVEMENTS.md when available**

---

## 🚨 RULE #6: ALWAYS CREATE BACKUPS WITH .backup SUFFIX

**BEFORE** modifying or deleting any existing files:

1. **Create backup with .backup suffix:**
   ```bash
   # For files being modified
   cp filename.ext filename.ext.backup
   
   # Examples:
   cp style.module.css style.module.css.backup
   cp index.html index.html.backup
   cp app.module.js app.module.js.backup
   ```

2. **After successful implementation:**
   - Keep ONLY the `.backup` files
   - Remove the original files if they're no longer used
   - The `.backup` suffix clearly indicates it's a backup

3. **Why .backup suffix is important:**
   - ✅ Clear naming: Anyone can see it's a backup
   - ✅ Easy rollback: Just rename file.backup → file
   - ✅ Git tracks it: Backup is versioned
   - ✅ No confusion: Original vs backup is obvious

4. **Cleanup after implementation:**
   ```bash
   # If original file is replaced (not used anymore):
   rm original-file.ext
   # Keep: original-file.ext.backup
   
   # Commit the cleanup
   git add -u original-file.ext
   git add original-file.ext.backup
   git commit -m "chore: Remove unused original, keep .backup version"
   ```

**Example from PLAN-003:**
- Created `style.module.css.backup` ✅
- Removed `style.module.css` after CSS modules working ✅
- Kept only `style.module.css.backup` for rollback ✅

---

## 🚨 RULE #7: UPDATE RULES IF BYPASSED

If rules are bypassed:

1. **Stop the implementation**
2. **Create the missing plan file retroactively**
3. **Document what was done**
4. **Update THIS file with lessons learned**
5. **Add preventive measures**

---

## ✅ CORRECT WORKFLOW

```
┌─────────────────────────────────────┐
│ 1. User requests implementation     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 2. Copy TEMPLATE-IMPLEMENTATION-    │
│    PLAN.md to PLAN-00X-FEATURE.md   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 3. Read MODULARITY_IMPROVEMENTS.md  │
│    for specific feature details     │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 4. Fill in ALL sections:            │
│    - Header                          │
│    - Objectives                      │
│    - Success criteria                │
│    - All 6 phases                    │
│    - Code templates (complete!)      │
│    - Testing procedures              │
│    - Troubleshooting                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 5. Verify plan is complete:         │
│    - No [placeholders]               │
│    - All code templates ready        │
│    - Time estimates realistic        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 6. Commit plan to Git                │
│    git add PLAN-00X-FEATURE.md       │
│    git commit -m "docs: Add plan"    │
│    git push                          │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 7. Create .backup files FIRST        │
│    cp file.ext file.ext.backup       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 8. NOW start Phase 1 of plan         │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 9. Follow plan step-by-step          │
│    - Phase 1: Preparation            │
│    - Phase 2: Implementation         │
│    - Phase 3: Integration            │
│    - Phase 4: Testing                │
│    - Phase 5: Documentation          │
│    - Phase 6: Git Commit             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 10. Clean up: Remove originals,     │
│     keep .backup files               │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 11. Update plan status to COMPLETED  │
└─────────────────────────────────────┘
```

---

## ❌ INCORRECT WORKFLOW (WHAT NOT TO DO)

```
User requests implementation
    ↓
❌ Start coding immediately
    ↓
❌ Create files without plan
    ↓
❌ "I'll document it later"
    ↓
❌ Skip creating plan file
    ↓
RESULT: Inconsistent, undocumented work
```

---

## 🎯 VERIFICATION CHECKLIST

Before starting ANY implementation:

- [ ] Plan file created from template
- [ ] Plan file completely filled in
- [ ] No [placeholder] text remains
- [ ] All code templates are complete
- [ ] Testing procedures defined
- [ ] Success criteria listed
- [ ] Plan committed to Git
- [ ] Plan reviewed and validated
- [ ] Backup files created with .backup suffix
- [ ] Backup files verified (compared to originals)

**If ANY checkbox is unchecked, DO NOT PROCEED!**

After completing implementation:

- [ ] All phases completed successfully
- [ ] All tests passed
- [ ] Documentation updated (version.json, CHANGELOG.md)
- [ ] Changes committed and pushed to Git
- [ ] Original files removed (if replaced)
- [ ] Only .backup files kept for rollback
- [ ] Plan status marked as ✅ COMPLETED

---

## 📋 LESSON LEARNED: PLAN-002 INCIDENT

**What Happened:**
- User requested "PROCEED WITH PLAN-002"
- Agent skipped creating PLAN-002 file
- Agent went directly to implementation
- Work was completed but not documented in plan file

**What Should Have Happened:**
1. Create PLAN-002-DATA-DRIVEN-LINKS.md from template
2. Fill in all sections with complete details
3. Commit plan file
4. THEN start implementation

**Corrective Action:**
- Created CRITICAL-IMPLEMENTATION-RULES.md (this file)
- Updated QUICK-REFERENCE.md with stronger reminders
- Added verification checklist

**Prevention:**
- Always check if plan file exists before implementing
- If user says "proceed with PLAN-00X", first verify plan file exists
- If plan doesn't exist, create it FIRST

---

## 🚀 PROPER RESPONSE TO "PROCEED WITH PLAN-00X"

When user says "proceed with PLAN-00X":

### Step 1: Check if plan file exists
```bash
ls -la docs/dev/plans/PLAN-00X-*.md
```

### Step 2A: If plan EXISTS
- Read the plan
- Follow it step-by-step
- Update status as you go

### Step 2B: If plan DOES NOT exist
- **STOP**
- Inform user: "Plan file doesn't exist yet. Creating it now..."
- Copy template
- Fill in all sections
- Commit plan
- THEN ask: "Plan created. Ready to proceed with implementation?"

---

## 📚 REFERENCES

- **Template:** `/docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md`
- **Quick Ref:** `/docs/dev/plans/QUICK-REFERENCE.md`
- **Workflow:** `/docs/dev/plans/README.md`
- **Details:** `/docs/dev/MODULARITY_IMPROVEMENTS.md`

---

## ⚡ QUICK REMINDERS

1. **Plan FIRST, code SECOND**
2. **Template is MANDATORY**
3. **Complete ALL sections**
4. **Commit plan BEFORE implementing**
5. **Follow plan STEP-BY-STEP**

---

**Created:** 2025-10-20  
**Last Updated:** 2025-10-20  
**Author:** Gerasimos Makis Mouzakitis  
**Status:** ACTIVE - MUST FOLLOW

---

## 🔒 ENFORCEMENT

**These rules are MANDATORY and NON-NEGOTIABLE.**

If bypassed:
1. Stop immediately
2. Create retroactive plan
3. Update this file
4. Continue properly

**NO EXCEPTIONS!**
