# 📋 Implementation Plan: [FEATURE NAME]

**Task:** [Brief description of the task]  
**Priority:** 🔴 HIGH / 🟡 MEDIUM / 🟢 LOW  
**Status:** 🟡 READY TO START / 🔵 IN PROGRESS / ✅ COMPLETED  
**Effort:** [X-Y hours]  
**Impact:** ⭐⭐⭐⭐⭐ (1-5 stars)  
**Started:** -  
**Completed:** -

---

## 💡 Plan Creation Strategy

**For simple plans (<500 lines):** Fill template sequentially in one session.

**For complex plans (>1000 lines, extensive code):**

### Option A: Sequential Chunks
1. **Chunk 1 (15 min):** Header, Objective, Success Criteria, Metrics
2. **Chunk 2 (30 min):** Phase 1 (Preparation) + Phase 2 (Implementation with complete code)
3. **Chunk 3 (30 min):** Phase 3 (Integration) + Phase 4 (Testing)
4. **Chunk 4 (20 min):** Phase 5 (Documentation) + Phase 6 (Git)
5. **Chunk 5 (20 min):** Troubleshooting + Rollback Plan
6. **Chunk 6 (10 min):** Completion Checklist + Review
7. **Total:** ~2 hours for comprehensive plan

### Option B: Code-First Approach
1. **Step 1 (40 min):** Write all code templates (in scratch or comments)
2. **Step 2 (10 min):** Copy template, fill header and metrics
3. **Step 3 (5 min):** Insert pre-written code into Phase 2
4. **Step 4 (30 min):** Fill Phases 1, 3-6 referencing the code
5. **Step 5 (20 min):** Add testing procedures and troubleshooting
6. **Step 6 (15 min):** Complete checklist, review, commit
7. **Total:** ~2 hours, complete code included upfront

**Benefits of Chunking:**
- ✅ Prevents token limit issues during creation
- ✅ Better focus on each section
- ✅ Easier to review incrementally
- ✅ Complete code templates included (no placeholders)
- ✅ Implementation is faster (copy-paste ready code)
- ✅ Reduces back-and-forth during implementation

**Rule:** Never sacrifice completeness for speed. Incomplete plans cause delays during implementation.

---

## 🎯 Objective

[Clear description of what this implementation aims to achieve. Include:]
- What problem does this solve?
- What benefits will it bring?
- How does it improve modularity?

---

## 📊 Success Criteria

Check all items when complete:

- [ ] All functionality works identically to before
- [ ] No console errors in browser
- [ ] No breaking changes to existing features
- [ ] Code is properly documented
- [ ] All tests pass
- [ ] Version numbers updated
- [ ] Documentation updated
- [ ] Changes committed to Git
- [ ] Changes pushed to GitHub

---

## 📈 Before & After Metrics

### Before Implementation
```
[Describe current state with metrics:]
- File count: X
- Line count: Y
- Modularity score: Z/10
- Specific metric: Value
```

### After Implementation (Expected)
```
[Describe expected state with metrics:]
- File count: X
- Line count: Y
- Modularity score: Z/10
- Specific metric: Value
- Improvement: +X%
```

---

## 🗺️ Implementation Steps

### Phase 1: Preparation ([X] minutes)

#### Step 1.1: Create Backup Files (MANDATORY)

**⚠️ CRITICAL: Always create backups with .backup suffix BEFORE modifying files**

```bash
# Backup files that will be modified or replaced
cp file-to-modify.ext file-to-modify.ext.backup
cp another-file.ext another-file.ext.backup

# Example from PLAN-003:
cp style.module.css style.module.css.backup
cp index.html index.html.backup
```

**Verify backups:**
```bash
# Check backup files exist
ls -la *.backup

# Compare backup with original (should be identical)
diff file.ext file.ext.backup
# Expected: No output (files are identical)
```

**Why .backup suffix?**
- ✅ Clear naming: Anyone knows it's a backup
- ✅ Easy rollback: Rename .backup → original
- ✅ Git tracks it: Backup is versioned
- ✅ No confusion: Original vs backup is obvious

---

#### Step 1.2: [Preparation Task Name]
```bash
# Commands to run
[bash commands]
```

**Expected Result:** [What should happen]

**Verification:**
```bash
# How to verify
[verification commands]
```

---

#### Step 1.3: [Another Preparation Task]
[Description of what to do]

**Files Affected:**
- `/path/to/file1`
- `/path/to/file2`

---

### Phase 2: [Main Implementation Phase] ([X] minutes)

#### Step 2.1: Create [New File/Component]

**File:** `/path/to/new/file`

**Action:** [Description of what to create]

**Code Template:**
```[language]
// Paste complete code template here
```

**Key Features:**
1. ✅ Feature 1
2. ✅ Feature 2
3. ✅ Feature 3

---

#### Step 2.2: Modify [Existing File]

**File:** `/path/to/existing/file`

**Changes Required:**
1. Remove: [What to remove]
2. Add: [What to add]
3. Update: [What to update]

**Before:**
```[language]
// Old code
```

**After:**
```[language]
// New code
```

---

### Phase 3: Integration ([X] minutes)

#### Step 3.1: Update Dependencies

**Files to Update:**
- [ ] File 1 - [Why it needs updating]
- [ ] File 2 - [Why it needs updating]

**Changes:**
```[language]
// Show specific changes
```

---

#### Step 3.2: Wire Everything Together

[Description of how components connect]

**Integration Points:**
1. Component A → Component B
2. Component B → Component C

---

### Phase 4: Testing ([X] minutes)

#### Step 4.1: Server Setup

**Ensure server is running:**
```bash
# Check if server is running
ps aux | grep "http.server 3000"

# If not running, start it
cd /workspaces/makis-links
python3 -m http.server 3000 > /dev/null 2>&1 &
```

**Verify server:**
```bash
curl -I http://localhost:3000/
```

**Expected:** HTTP/1.0 200 OK

---

#### Step 4.2: File Access Tests

**Test all new/modified files are accessible:**
```bash
# Test file 1
curl -I http://localhost:3000/path/to/file1

# Test file 2
curl -I http://localhost:3000/path/to/file2
```

**Expected:** All return 200 OK

---

#### Step 4.3: Visual Testing Checklist

Open http://localhost:3000 in browser and verify:

**Visual Tests:**
- [ ] Page loads without errors
- [ ] [Specific visual element 1] appears correctly
- [ ] [Specific visual element 2] appears correctly
- [ ] [Specific visual element 3] appears correctly

**Console Tests (F12 → Console):**
- [ ] No red errors
- [ ] [Expected log message appears]
- [ ] No 404 errors for any files
- [ ] No CORS errors

**Network Tests (F12 → Network):**
- [ ] All files load with 200 status
- [ ] No failed requests
- [ ] File sizes are reasonable
- [ ] Caching works correctly (on refresh)

**Functionality Tests:**
- [ ] [Feature 1] works correctly
- [ ] [Feature 2] works correctly
- [ ] [Feature 3] works correctly
- [ ] No regression in existing features

---

#### Step 4.4: Performance Testing

**Before vs After Comparison:**

Run in browser console:
```javascript
// Test load time
performance.getEntriesByType('navigation')[0].domContentLoadedEventEnd

// Test resource count
performance.getEntriesByType('resource').length
```

**Expected Results:**
- Load time: Similar or better
- Resource count: [X resources]
- Performance improvement: [X%]

**Test Caching:**
1. Load page first time (fresh)
2. Refresh page (Ctrl+R)
3. Check Network tab for cached files

---

### Phase 5: Documentation ([X] minutes)

#### Step 5.1: Update version.json

**File:** `/workspaces/makis-links/version.json`

**Changes:**
1. Increment version: `0.0.X` → `0.0.Y`
2. Update `lastUpdated` timestamp
3. Add new module entries
4. Update existing module versions

**Template:**
```json
{
  "app": "MAKIS LINKS",
  "version": "0.0.Y",
  "lastUpdated": "2025-10-20T[HH:MM]",
  "modules": {
    "new.module.js": "0.0.1",
    "existing.module.js": "0.0.2"
  }
}
```

---

#### Step 5.2: Update CHANGELOG.md

**File:** `/workspaces/makis-links/CHANGELOG.md`

**Add new entry at the top:**
```markdown
## [0.0.Y] — 2025-10-20
### ✨ Added
- [New feature 1]
- [New feature 2]

### 🛠️ Changed
- [Changed item 1]
- [Changed item 2]

### 🎯 Improved
- [Improvement 1]
- [Improvement 2]

### 🐛 Fixed
- [Bug fix 1]
- [Bug fix 2]

### 👤 Author
- Gerasimos Makis Mouzakitis
```

---

#### Step 5.3: Update meta.module.json (MANDATORY)

**⚠️ CRITICAL: Always update meta.module.json to document all modules**

**File:** `/workspaces/makis-links/meta.module.json`

**For NEW modules created:**
```json
{
  "module": "new.module.js",
  "version": "0.0.1",
  "author": "Gerasimos Makis Mouzakitis",
  "description": "[Clear description of what this module does]",
  "dependencies": ["dependency1.js", "dependency2.js"],
  "lastUpdated": "2025-10-21T[HH:MM]"
}
```

**For REPLACED modules (e.g., splitting one file into multiple):**
1. Remove old module entry (if no longer used)
2. Add new module entries
3. Document dependencies between modules

**Example from PLAN-003 (CSS modules):**
```json
// ❌ Remove old entry:
// "style.module.css" - no longer used

// ✅ Add new entries:
{
  "module": "index.css",
  "version": "0.0.1",
  "description": "Main CSS entry point - imports all modular CSS files",
  "dependencies": ["base.module.css", "header.module.css", "..."],
  "lastUpdated": "2025-10-21T05:01"
},
{
  "module": "base.module.css",
  "version": "0.0.1",
  "description": "CSS custom properties (design tokens) and base resets",
  "dependencies": [],
  "lastUpdated": "2025-10-21T04:59"
}
// ... add all other modules
```

**For MODIFIED existing modules:**
- Update version if significant changes
- Update lastUpdated timestamp
- Update dependencies if changed

**Verification:**
```bash
# Validate JSON syntax
python3 -m json.tool meta.module.json > /dev/null && echo "✅ Valid JSON"

# Check all new modules are documented
# Compare with files created in Phase 2
```

---

#### Step 5.4: Update README.md (if needed)

**File:** `/workspaces/makis-links/README.md`

**Sections to update:**
- [ ] Features list (if new features added)
- [ ] Architecture diagram (if structure changed)
- [ ] Usage instructions (if usage changed)
- [ ] File structure (if new files added)

---

### Phase 6: Git Commit & Push ([X] minutes)

#### Step 6.1: Review Changes

```bash
cd /workspaces/makis-links
git status
git diff
```

**Expected files changed:**
- [ ] File 1
- [ ] File 2
- [ ] File 3

---

#### Step 6.2: Stage Changes

```bash
# Add new files
git add path/to/new/file1
git add path/to/new/file2

# Add modified files
git add path/to/modified/file1
git add path/to/modified/file2

# Add documentation
git add version.json CHANGELOG.md meta.module.json

# Verify staged changes
git status
```

---

#### Step 6.3: Commit with Descriptive Message

```bash
git commit -m "[type]: [Brief description] (v0.0.Y)

- [Detailed change 1]
- [Detailed change 2]
- [Detailed change 3]
- [Detailed change 4]
- Updated version to 0.0.Y
- Updated CHANGELOG.md and meta.module.json

Modularity Score Impact:
- [Metric 1]: X/10 → Y/10 ⬆️
- Overall Score: X/10 → Y/10 ⬆️

Benefits:
✅ [Benefit 1]
✅ [Benefit 2]
✅ [Benefit 3]
✅ [Benefit 4]"
```

**Commit Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Adding tests
- `chore:` Maintenance

---

#### Step 6.4: Push to GitHub

```bash
# Push to remote
git push origin main

# Verify push succeeded
git log --oneline -1
```

**Expected:** Commit appears on GitHub

---

#### Step 6.5: Clean Up Original Files (Keep Only .backup Files)

**After verifying implementation works:**

```bash
# Remove original files that are no longer used (replaced by new implementation)
rm original-file.ext

# Keep ONLY the .backup version
# This makes it clear which files are backups
ls -la *.backup

# Example from PLAN-003:
rm style.module.css          # Removed (no longer used)
# Kept: style.module.css.backup  ← Clear it's a backup
```

**Commit the cleanup:**
```bash
git add -u original-file.ext
git commit -m "chore: Remove unused original file, keep .backup version

- Removed original-file.ext (replaced by new implementation)
- Kept original-file.ext.backup for rollback
- .backup suffix clearly indicates it's a backup file"

git push origin main
```

**Why remove originals and keep .backup?**
- ✅ Clear naming: .backup suffix is self-documenting
- ✅ Cleaner workspace: No duplicate files without clear purpose
- ✅ Easy rollback: Backup file is clearly marked
- ✅ Git history: Original still in Git history if needed

**⚠️ IMPORTANT:**
- Only remove originals AFTER verifying new implementation works
- Always keep the .backup file for rollback
- If unsure, keep both until fully tested

---

## 📝 Detailed Code Templates

### Template 1: [File Name]

**File:** `/path/to/file`

**Purpose:** [What this file does]

**Complete Code:**
```[language]
/**
 * [Description]
 * @module [module-name]
 * @version 0.0.1
 * @author Gerasimos Makis Mouzakitis
 */

// Complete implementation here
```

**Usage:**
```[language]
// How to use this file
```

---

### Template 2: [Another File Name]

**File:** `/path/to/another/file`

**Purpose:** [What this file does]

**Complete Code:**
```[language]
// Complete implementation here
```

---

## ⚠️ Potential Issues & Solutions

### Issue 1: [Common Problem]

**Symptom:** [What the user will see]

**Cause:** [Why it happens]

**Solution:**
```bash
# Commands or code to fix
```

**Verification:**
```bash
# How to verify it's fixed
```

---

### Issue 2: [Another Problem]

**Symptom:** [What the user will see]

**Cause:** [Why it happens]

**Solution:**
[Step-by-step fix]

---

### Issue 3: [Edge Case]

**Symptom:** [What the user will see]

**Cause:** [Why it happens]

**Solution:**
[How to resolve]

---

## 🔄 Rollback Plan

If something goes wrong, here's how to rollback:

### Option 1: Git Revert (Recommended)

```bash
# Revert to previous commit
git revert HEAD

# Push revert
git push origin main
```

---

### Option 2: Restore from Backup

```bash
# Restore specific file
git checkout HEAD~1 -- path/to/file

# Or restore from backup file
cp path/to/file.backup path/to/file
```

---

### Option 3: Hard Reset (Use with Caution)

```bash
# Reset to previous commit (loses uncommitted changes!)
git reset --hard HEAD~1

# Force push (only if you're sure!)
git push --force origin main
```

---

## 📚 References

- [Link to relevant documentation]
- [Link to tutorial]
- [Link to related issue/PR]
- [Link to specification]

---

## 🎯 Expected Outcomes

### Before Implementation
```
[Current state metrics:]
- Metric 1: Value 1
- Metric 2: Value 2
- Score: X/10
```

### After Implementation
```
[Expected state metrics:]
- Metric 1: Value 1 → Value 2 (Δ +X%)
- Metric 2: Value 3 → Value 4 (Δ +Y%)
- Score: X/10 → Y/10 ⬆️
```

### Benefits Achieved
- ✅ [Quantifiable benefit 1]
- ✅ [Quantifiable benefit 2]
- ✅ [Quantifiable benefit 3]

---

## ✅ Completion Checklist

### Pre-Implementation
- [ ] Read this implementation plan completely
- [ ] Understand the architecture changes
- [ ] Backup current working code
- [ ] Ensure development environment is ready
- [ ] Clear browser cache

### Implementation
- [ ] Phase 1 completed (Preparation)
- [ ] Phase 2 completed (Main Implementation)
- [ ] Phase 3 completed (Integration)
- [ ] Phase 4 completed (Testing)
- [ ] Phase 5 completed (Documentation)
- [ ] Phase 6 completed (Git Commit & Push)

### Post-Implementation
- [ ] All tests pass
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Documentation is updated
- [ ] Changes are on GitHub
- [ ] Plan status updated to "✅ COMPLETED"
- [ ] Mark task as done in TODO list
- [ ] Celebrate! 🎉

---

## 📊 Metrics & KPIs

**Code Quality:**
- Lines of code: [Before] → [After]
- File count: [Before] → [After]
- Cyclomatic complexity: [Before] → [After]

**Performance:**
- Load time: [Before]ms → [After]ms
- Bundle size: [Before]KB → [After]KB
- Cache hit rate: [X%]

**Modularity:**
- Component coupling: [Before] → [After]
- Component cohesion: [Before] → [After]
- Overall score: [Before]/10 → [After]/10

---

## 🎉 Success Criteria Met

When all checkboxes above are checked, this implementation is **COMPLETE**.

**Next Task:** [Link to next implementation plan]

---

**Plan Created:** 2025-10-20  
**Plan Version:** 1.0  
**Estimated Time:** ___ hours  
**Actual Time:** ___ hours (fill in after completion)  
**Created By:** Gerasimos Makis Mouzakitis  
**Last Updated:** 2025-10-20

---

## 📎 Appendix

### A. Related Files
- File 1: `/path/to/file1`
- File 2: `/path/to/file2`

### B. Dependencies
- Dependency 1: [Name + Version]
- Dependency 2: [Name + Version]

### C. Breaking Changes
- [ ] None
- [ ] [Description of breaking change 1]
- [ ] [Description of breaking change 2]

### D. Migration Notes
[If there are breaking changes, provide migration steps]

---

## 💡 Tips & Best Practices

1. **Always backup before making changes**
   - Use Git to create save points
   - Keep backup files until implementation is verified

2. **Test incrementally**
   - Don't wait until the end to test
   - Test after each phase

3. **Document as you go**
   - Update comments while coding
   - Keep CHANGELOG.md current

4. **Commit frequently**
   - Small, focused commits are better
   - Makes rollback easier if needed

5. **Verify in browser**
   - Always test in actual browser
   - Check console for errors
   - Verify network requests

---

## 🔍 Code Review Checklist

Before finalizing, review:

**Code Quality:**
- [ ] Code follows project style guide
- [ ] Functions are well-named and single-purpose
- [ ] No hardcoded values (use constants)
- [ ] No commented-out code
- [ ] No console.log in production code (unless intentional)

**Documentation:**
- [ ] All functions have JSDoc comments
- [ ] Complex logic is explained with comments
- [ ] README is updated if needed
- [ ] CHANGELOG is accurate

**Testing:**
- [ ] All edge cases are tested
- [ ] Error handling is in place
- [ ] No console errors
- [ ] Performance is acceptable

**Security:**
- [ ] No sensitive data exposed
- [ ] Input is validated
- [ ] XSS vulnerabilities addressed
- [ ] CORS is properly configured

---

**END OF TEMPLATE**

---

## 📖 How to Use This Template

1. **Copy this template** to create a new plan:
   ```bash
   cp docs/dev/plans/TEMPLATE-IMPLEMENTATION-PLAN.md \
      docs/dev/plans/PLAN-00X-FEATURE-NAME.md
   ```

2. **Fill in all sections** with specific details for your implementation

3. **Update the header** with correct task name, priority, effort estimate

4. **Customize phases** based on your specific needs (add/remove as needed)

5. **Update checklists** with specific items for your implementation

6. **Add code templates** that are copy-paste ready

7. **Include realistic time estimates** for each phase

8. **Reference this plan** during implementation to stay on track

9. **Update status** as you progress through phases

10. **Mark complete** when all criteria are met

---

**This template ensures:**
- ✅ Consistent implementation process
- ✅ Complete documentation
- ✅ Thorough testing
- ✅ Proper version control
- ✅ Clear success criteria
- ✅ Easy rollback if needed
