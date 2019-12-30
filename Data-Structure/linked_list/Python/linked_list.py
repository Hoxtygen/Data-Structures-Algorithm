class Node:
    def __init__(self, data, next = None):
        self.data = data
        self.next = next




# class LinkedList:
#     def __init__(self, head = None):
#         self.head = head
#         self.size = 0
#
#     def add_node(self, data):
#         new_node = Node(data)
#         new_node.add_new_node = (self.head)
#         self.head = new_node
#         self.size += 1
#
#     def get_size(self):
#         return self.size
#
#
# Victor = LinkedList()
# Victor.add_node(5)
# Victor.add_node('Miriam')
# Victor.add_node('29')
# Victor.add_node('hello')
#
# print(Victor.get_size())

class LinkedList:
    """docstring for LinkedList."""

    def __init__(self, head = None):
        self.head = head

    def add_list_item_to_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def add_to_last(self, data):
        new_node = Node(data)
        if self.head == None:
            self.head = new_node
            return
        node = self.head
        while node.next:
            node = node.next
        node.next = new_node
        return

    def add_in_between_nodes(self,data_index, data):
        if data_index == None:
            print("The mentioned node does not exist")
            return
        new_node = Node(data)
        new_node.next = data_index.next
        data_index.next = new_node




    def list_len(self):
        '''returns the number of items in the list '''
        count = 0
        current_node = self.head
        while current_node is not None:
            # increase the counter by one
            count += 1
            # jump to the linked node
            current_node = current_node.next
        return count

    def output_list(self):
        current_node = self.head
        while current_node is not None:
            print(current_node.data)
            current_node = current_node.next
        return

    def get_a_node(self, data):
        if self.head is None:
            return
        if self.head.data == data:
            return self.head.data
        current_node = self.head.data
        while current_node:
            if current_node == data:
                return current_node
        current_node = current_node.next
        return False


    def remove_list_item(self, data):
        pass
        # item_to_be_removed = data
        # if self.head is None:
        #     return
        # if self.head == data:
        #     return self.head
        # current_node = self.head
        # previous_node = None
        # curr_index = 0
        # while current_node is not  None:
        #     if current_node.next == data:
        #         print(data)
        #         return data
        #     current_node = current_node.next
        #     if curr_index == item_to_be_removed:
        #         if previous_node is not None:
        #             previous_node.next = current_node.next
        #         else:
        #             self.head = current_node.next
        #             return
        #     previous_node = current_node
        #     previous_node.next = previous_node.next
        #     curr_index += 1
        # return
        # # while True:
        # #     previous_node = current_node
        # #     current_node = current_node.next
        # #     if curr_index == item_to_be_removed:
        # #         previous_node.next = current_node.next
        # #         return
        # #     curr_index += 1






Wasiu = LinkedList()
Wasiu.add_list_item_to_beginning('Humphrey')
Wasiu.add_to_last('yemi')
Wasiu.add_to_last('Macateer')
Wasiu.add_in_between_nodes('yemi','Noble')
# print(Wasiu.get_a_node(1))
# Wasiu.remove_list_item('876')
# print(Wasiu.list_len())
Wasiu.output_list()
