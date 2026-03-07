import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Custom Types
  type Enquiry = {
    id : Nat;
    name : Text;
    gradeLevel : GradeLevel;
    phone : Text;
    message : Text;
  };

  type GradeLevel = {
    #seventh;
    #eighth;
    #ninth;
    #tenth;
  };

  public type UserProfile = {
    name : Text;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Nat.compare(enquiry1.id, enquiry2.id);
    };
  };

  // State
  var nextEnquiryId = 1;
  let enquiries = Map.empty<Nat, Enquiry>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Authentication
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Enquiry Management
  public shared ({ caller }) func submitEnquiry(name : Text, gradeLevel : GradeLevel, phone : Text, message : Text) : async () {
    // No authorization check - anyone including guests can submit enquiries
    let enquiry : Enquiry = {
      id = nextEnquiryId;
      name;
      gradeLevel;
      phone;
      message;
    };
    enquiries.add(nextEnquiryId, enquiry);
    nextEnquiryId += 1;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all enquiries");
    };
    enquiries.values().toArray().sort();
  };

  public shared ({ caller }) func deleteEnquiry(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete enquiries");
    };
    if (not (enquiries.containsKey(id))) {
      Runtime.trap("Enquiry not found");
    };
    enquiries.remove(id);
  };
};
